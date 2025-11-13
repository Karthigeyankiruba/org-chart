import { forwardRef } from "react";
import { SkeletonBase, type BorderRadiusSize } from "./Skeleton.styles";

interface SkeletonProps {
  width?: string;
  height?: string;
  borderRadius?: BorderRadiusSize;
  className?: string;
}

export const Skeleton = forwardRef<HTMLDivElement, SkeletonProps>(
  ({ width, height, borderRadius, className }, ref) => {
    return (
      <SkeletonBase
        ref={ref}
        $width={width}
        $height={height}
        $borderRadius={borderRadius}
        className={className}
      />
    );
  }
);

export default Skeleton;
