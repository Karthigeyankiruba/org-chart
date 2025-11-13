import { useCallback, useMemo, useEffect, useRef, useState } from "react";
import ReactFlow, {
  type Node,
  type Edge,
  Background,
  Controls,
  MiniMap,
  type Connection,
  useNodesState,
  useEdgesState,
  addEdge,
  type NodeTypes,
  type NodeChange,
  type NodeDragHandler,
} from "reactflow";
import "reactflow/dist/style.css";
import { useGetEmployees, useUpdateEmployee, type Employee } from "../../api";
import EmployeeNode from "./EmployeeNode";
import styled from "styled-components";

const nodeTypes: NodeTypes = {
  employee: EmployeeNode,
};

const FlowContainer = styled.div`
  width: 100%;
  height: 100%;
  background-color: #ffffff;

  .react-flow__node {
    cursor: grab;
  }

  .react-flow__node:active {
    cursor: grabbing;
  }
`;

interface OrgChartProps {
  team?: string;
}

const OrgChart = ({ team }: OrgChartProps) => {
  const { data: employees = [] } = useGetEmployees(undefined, team);
  const updateEmployeeMutation = useUpdateEmployee();
  const prevEmployeesRef = useRef<string>("");
  const [draggedNodeId, setDraggedNodeId] = useState<string | null>(null);
  const [targetNodeId, setTargetNodeId] = useState<string | null>(null);
  const reactFlowWrapper = useRef<HTMLDivElement>(null);
  const nodesRef = useRef<Node[]>([]);

  // Build the tree structure from employees
  const { nodes: initialNodes, edges: initialEdges } = useMemo(() => {
    if (!employees.length) return { nodes: [], edges: [] };

    const nodes: Node[] = [];
    const edges: Edge[] = [];
    const nodeMap = new Map<string, Node>();
    const positions = new Map<string, { x: number; y: number }>();

    // Find root employees (no manager)
    const rootEmployees = employees.filter((emp) => !emp.managerId);
    const childrenMap = new Map<string, Employee[]>();

    // Group employees by manager
    employees.forEach((emp) => {
      if (emp.managerId) {
        if (!childrenMap.has(emp.managerId)) {
          childrenMap.set(emp.managerId, []);
        }
        childrenMap.get(emp.managerId)!.push(emp);
      }
    });

    // Calculate positions using a simple hierarchical layout
    const calculatePositions = (
      employee: Employee,
      level: number,
      index: number,
      siblingCount: number
    ) => {
      const x = index * 250 + (siblingCount - 1) * 125;
      const y = level * 150;

      positions.set(employee.id, { x, y });

      const children = childrenMap.get(employee.id) || [];
      children.forEach((child, childIndex) => {
        calculatePositions(
          child,
          level + 1,
          index * 2 + childIndex,
          children.length
        );
      });
    };

    // Calculate positions for root employees
    rootEmployees.forEach((root, index) => {
      calculatePositions(root, 0, index, rootEmployees.length);
    });

    // Create nodes
    employees.forEach((employee) => {
      const position = positions.get(employee.id) || { x: 0, y: 0 };
      const node: Node = {
        id: employee.id,
        type: "employee",
        position,
        data: {
          employee,
        },
      };
      nodes.push(node);
      nodeMap.set(employee.id, node);
    });

    // Create edges
    employees.forEach((employee) => {
      if (employee.managerId && nodeMap.has(employee.managerId)) {
        edges.push({
          id: `${employee.managerId}-${employee.id}`,
          source: employee.managerId,
          target: employee.id,
          type: "smoothstep",
          animated: false,
        });
      }
    });

    return { nodes, edges };
  }, [employees]);

  // Create a stable key from employees to detect actual changes
  const employeesKey = useMemo(
    () =>
      employees
        .map((e) => `${e.id}:${e.managerId}`)
        .sort()
        .join("|"),
    [employees]
  );

  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  // Helper function to check if two nodes intersect
  const nodesIntersect = useCallback((node1: Node, node2: Node): boolean => {
    const nodeWidth = 220;
    const nodeHeight = 140;
    const threshold = 80; // Extra padding for easier drop

    const x1 = node1.position.x;
    const y1 = node1.position.y;
    const x2 = node2.position.x;
    const y2 = node2.position.y;

    const isOverX =
      x1 >= x2 - nodeWidth / 2 - threshold &&
      x1 <= x2 + nodeWidth / 2 + threshold;
    const isOverY =
      y1 >= y2 - nodeHeight / 2 - threshold &&
      y1 <= y2 + nodeHeight / 2 + threshold;

    return isOverX && isOverY;
  }, []);

  // Update nodes when employees data actually changes
  useEffect(() => {
    if (prevEmployeesRef.current !== employeesKey) {
      prevEmployeesRef.current = employeesKey;
      setNodes(initialNodes);
      setEdges(initialEdges);
    }
  }, [employeesKey, initialNodes, initialEdges, setNodes, setEdges]);

  // Keep nodesRef in sync with nodes
  useEffect(() => {
    nodesRef.current = nodes;
  }, [nodes]);

  // Update nodes when drag state changes (for visual feedback)
  useEffect(() => {
    if (targetNodeId || draggedNodeId) {
      setNodes((nds) =>
        nds.map((node) => ({
          ...node,
          data: {
            ...node.data,
            isTarget: targetNodeId === node.id,
            isDragging: draggedNodeId === node.id,
          },
        }))
      );
    } else {
      // Reset all nodes when not dragging
      setNodes((nds) =>
        nds.map((node) => ({
          ...node,
          data: {
            ...node.data,
            isTarget: false,
            isDragging: false,
          },
        }))
      );
    }
  }, [targetNodeId, draggedNodeId, setNodes]);

  const onConnect = useCallback(
    (params: Connection) => {
      if (params.source && params.target) {
        // Update the employee's manager when a connection is made
        // params.source is the new manager, params.target is the employee being reassigned
        updateEmployeeMutation.mutate({
          id: params.target,
          updates: { managerId: params.source },
        });
      }
      setEdges((eds) => addEdge(params, eds));
    },
    [setEdges, updateEmployeeMutation]
  );

  // Handle node drag start
  const onNodeDragStart: NodeDragHandler = useCallback((_, node) => {
    setDraggedNodeId(node.id);
    setTargetNodeId(null);
  }, []);

  // Handle node drag - track when dragging over another node
  const onNodeDrag: NodeDragHandler = useCallback(
    (_, node) => {
      if (!draggedNodeId || draggedNodeId === node.id) return;

      // Use nodesRef to get the latest nodes state
      const currentNodes = nodesRef.current;

      // Find intersecting nodes by checking all current nodes
      const targetNode = currentNodes.find((n) => {
        if (n.id === draggedNodeId) return false;
        // Use the dragged node's current position from the event
        return nodesIntersect(node, n);
      });

      if (targetNode) {
        setTargetNodeId(targetNode.id);
      } else {
        setTargetNodeId(null);
      }
    },
    [draggedNodeId, nodesIntersect]
  );

  // Handle node drag stop - update manager if dropped on another node
  const onNodeDragStop: NodeDragHandler = useCallback(
    (_, node) => {
      if (!draggedNodeId) {
        return;
      }

      // Use the target node we tracked during drag, or check one more time
      let finalTargetNodeId = targetNodeId;

      if (!finalTargetNodeId) {
        // Last check for intersecting nodes
        const targetNode = nodes.find((n) => {
          if (n.id === draggedNodeId) return false;
          return nodesIntersect(node, n);
        });
        if (targetNode) {
          finalTargetNodeId = targetNode.id;
        }
      }

      if (finalTargetNodeId && finalTargetNodeId !== draggedNodeId) {
        // Update the manager relationship
        const employeeBeingMoved = employees.find(
          (e) => e.id === draggedNodeId
        );
        const newManager = employees.find((e) => e.id === finalTargetNodeId);

        if (
          employeeBeingMoved &&
          newManager &&
          employeeBeingMoved.id !== newManager.id
        ) {
          // Prevent circular references - check if creating a cycle
          const wouldCreateCycle = (
            employeeId: string,
            managerId: string
          ): boolean => {
            let currentId: string | null = managerId;
            const visited = new Set<string>();

            while (currentId) {
              if (currentId === employeeId) return true; // Cycle detected
              if (visited.has(currentId)) break; // Prevent infinite loop
              visited.add(currentId);

              const current = employees.find((e) => e.id === currentId);
              currentId = current?.managerId || null;
            }
            return false;
          };

          if (!wouldCreateCycle(employeeBeingMoved.id, newManager.id)) {
            console.log(
              `Moving ${employeeBeingMoved.name} under ${newManager.name}`
            );
            updateEmployeeMutation.mutate({
              id: draggedNodeId,
              updates: { managerId: finalTargetNodeId },
            });
          }
        }
      }

      setDraggedNodeId(null);
      setTargetNodeId(null);
    },
    [
      draggedNodeId,
      targetNodeId,
      employees,
      updateEmployeeMutation,
      nodes,
      nodesIntersect,
    ]
  );

  // Handle node position changes
  const handleNodesChange = useCallback(
    (changes: NodeChange[]) => {
      onNodesChange(changes);
    },
    [onNodesChange]
  );

  return (
    <FlowContainer ref={reactFlowWrapper}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={handleNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        onNodeDragStart={onNodeDragStart}
        onNodeDrag={onNodeDrag}
        onNodeDragStop={onNodeDragStop}
        nodeTypes={nodeTypes}
        fitView
        attributionPosition="bottom-left"
        nodesDraggable={true}
        nodesConnectable={true}
        elementsSelectable={true}
      >
        <Background />
        <Controls />
        <MiniMap />
      </ReactFlow>
    </FlowContainer>
  );
};

export default OrgChart;
