import { Skeleton } from "../common/Skeleton";
import {
  SkeletonCard,
  SkeletonList,
  SkeletonContent,
} from "./EmployeeListSkeleton.styles";

const SkeletonEmployeeCard = () => {
  return (
    <SkeletonCard>
      <Skeleton width="48px" height="48px" borderRadius="full" />
      <SkeletonContent>
        <Skeleton width="60%" height="16px" borderRadius="small" />
        <Skeleton width="40%" height="16px" borderRadius="small" />
        <Skeleton width="30%" height="20px" borderRadius="small" />
      </SkeletonContent>
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
