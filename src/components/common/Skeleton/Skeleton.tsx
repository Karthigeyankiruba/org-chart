import { SkeletonBase, type BorderRadiusSize } from "./Skeleton.styles";

interface SkeletonProps {
  width?: string;
  height?: string;
  borderRadius?: BorderRadiusSize;
  className?: string;
}

export const Skeleton = ({
  width,
  height,
  borderRadius,
  className,
}: SkeletonProps) => {
  return (
    <SkeletonBase
      $width={width}
      $height={height}
      $borderRadius={borderRadius}
      className={className}
    />
  );
};

export default Skeleton;
