import { memo } from "react";
import { Handle, Position, type NodeProps } from "reactflow";
import { Avatar } from "../common/Avatar";
import type { Employee } from "../../services/types/employee";
import {
  NodeContainer,
  NodeContent,
  AvatarWrapper,
  EmployeeInfo,
  EmployeeName,
  EmployeeDesignation,
  TeamTag,
  DragHint,
} from "./EmployeeNode.styles";

interface EmployeeNodeData {
  employee: Employee;
  isTarget?: boolean;
  isDragging?: boolean;
}

const EmployeeNode = ({ data }: NodeProps<EmployeeNodeData>) => {
  const { employee, isTarget = false, isDragging = false } = data;

  return (
    <NodeContainer $isTarget={isTarget} $isDragging={isDragging}>
      <Handle
        type="target"
        position={Position.Top}
        style={{ background: isTarget ? "#3b82f6" : "#555" }}
      />
      <NodeContent>
        <AvatarWrapper>
          <Avatar imageUrl={employee.avatar} name={employee.name} size="48px" />
        </AvatarWrapper>
        <EmployeeInfo>
          <EmployeeName>{employee.name}</EmployeeName>
          <EmployeeDesignation>{employee.designation}</EmployeeDesignation>
          <TeamTag>{employee.team}</TeamTag>
        </EmployeeInfo>
      </NodeContent>
      <DragHint $isTarget={isTarget}>
        {isTarget
          ? "Drop here to assign manager"
          : isDragging
          ? "Dragging..."
          : "Drag to reassign"}
      </DragHint>
      <Handle
        type="source"
        position={Position.Bottom}
        style={{ background: isTarget ? "#3b82f6" : "#555" }}
      />
    </NodeContainer>
  );
};

export default memo(EmployeeNode);
