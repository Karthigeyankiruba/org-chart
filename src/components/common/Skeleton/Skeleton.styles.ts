import styled, { keyframes } from "styled-components";

const shimmer = keyframes`
  0% {
    background-position: -1000px 0;
  }
  100% {
    background-position: 1000px 0;
  }
`;
export type BorderRadiusSize = "small" | "medium" | "large" | "full";

const getBorderRadius = (size?: BorderRadiusSize): string => {
  switch (size) {
    case "small":
      return "4px";
    case "medium":
      return "8px";
    case "large":
      return "12px";
    case "full":
      return "50%";
    default:
      return "4px";
  }
};

export const SkeletonBase = styled.div<{
  $width?: string;
  $height?: string;
  $borderRadius?: BorderRadiusSize;
}>`
  background: linear-gradient(90deg, #f0f0f0 0%, #f8f8f8 50%, #f0f0f0 100%);
  background-size: 1000px 100%;
  animation: ${shimmer} 1.5s infinite linear;
  width: ${(props) => props.$width || "100%"};
  height: ${(props) => props.$height || "20px"};
  border-radius: ${(props) => getBorderRadius(props.$borderRadius)};
`;
