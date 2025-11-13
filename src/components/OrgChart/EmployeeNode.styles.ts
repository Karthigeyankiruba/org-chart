import styled from "styled-components";

export const NodeContainer = styled.div<{
  $isTarget?: boolean;
  $isDragging?: boolean;
}>`
  background-color: ${(props) => (props.$isTarget ? "#dbeafe" : "#f3f4f6")};
  border: ${(props) =>
    props.$isTarget
      ? "2px solid #3b82f6"
      : props.$isDragging
      ? "2px solid #10b981"
      : "1px solid #e5e7eb"};
  border-radius: 8px;
  padding: 12px;
  min-width: 200px;
  box-shadow: ${(props) =>
    props.$isTarget
      ? "0 4px 12px rgba(59, 130, 246, 0.4)"
      : props.$isDragging
      ? "0 4px 12px rgba(16, 185, 129, 0.3)"
      : "0 1px 3px rgba(0, 0, 0, 0.1)"};
  cursor: grab;
  transition: all 0.2s ease;
  transform: ${(props) => (props.$isTarget ? "scale(1.05)" : "scale(1)")};

  &:active {
    cursor: grabbing;
  }

  &:hover {
    box-shadow: ${(props) =>
      props.$isTarget
        ? "0 4px 12px rgba(59, 130, 246, 0.4)"
        : "0 4px 6px rgba(0, 0, 0, 0.1)"};
  }
`;

export const NodeContent = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const AvatarWrapper = styled.div`
  flex-shrink: 0;
`;

export const EmployeeInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  flex: 1;
  min-width: 0;
`;

export const EmployeeName = styled.h3`
  margin: 0;
  font-size: 16px;
  font-weight: 600;
  color: #111827;
  line-height: 1.2;
`;

export const EmployeeDesignation = styled.p`
  margin: 0;
  font-size: 14px;
  color: #6b7280;
  line-height: 1.2;
`;

export const TeamTag = styled.span`
  display: inline-block;
  padding: 4px 8px;
  background-color: #dbeafe;
  color: #1e40af;
  border-radius: 4px;
  font-size: 12px;
  font-weight: 500;
  width: fit-content;
`;

export const DragHint = styled.p<{ $isTarget?: boolean }>`
  margin: 8px 0 0 0;
  font-size: 11px;
  color: ${(props) => (props.$isTarget ? "#3b82f6" : "#9ca3af")};
  font-style: italic;
  font-weight: ${(props) => (props.$isTarget ? "600" : "400")};
`;
