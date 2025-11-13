import styled from "styled-components";
import { Skeleton } from "../common/Skeleton";

const SkeletonCard = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px;
  background-color: #f9fafb;
  border-radius: 8px;
  width: 100%;
  border: 1px solid #e5e7eb;
`;

const SkeletonList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 100%;
`;

const SkeletonEmployeeCard = () => {
  return (
    <SkeletonCard>
      <Skeleton width="48px" height="48px" borderRadius="full" />
      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          gap: "8px",
        }}
      >
        <Skeleton width="60%" height="16px" borderRadius="small" />
        <Skeleton width="40%" height="16px" borderRadius="small" />
        <Skeleton width="30%" height="20px" borderRadius="small" />
      </div>
    </SkeletonCard>
  );
};

interface SkeletonEmployeeListProps {
  count?: number;
}

export const SkeletonEmployeeList = ({
  count = 5,
}: SkeletonEmployeeListProps) => {
  return (
    <SkeletonList>
      {Array.from({ length: count }).map((_, index) => (
        <SkeletonEmployeeCard key={index} />
      ))}
    </SkeletonList>
  );
};
