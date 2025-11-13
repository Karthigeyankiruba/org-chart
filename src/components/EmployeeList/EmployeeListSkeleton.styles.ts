import styled from "styled-components";

export const SkeletonCard = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px;
  background-color: #f9fafb;
  border-radius: 8px;
  width: 100%;
  border: 1px solid #e5e7eb;
`;

export const SkeletonList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 100%;
`;

export const SkeletonContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;
