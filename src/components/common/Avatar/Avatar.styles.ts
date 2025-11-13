import styled from "styled-components";

interface AvatarContainerProps {
  $size?: string;
}

export const AvatarContainer = styled.div<AvatarContainerProps>`
  width: ${(props) => props.$size || "48px"};
  height: ${(props) => props.$size || "48px"};
  border-radius: var(--radius-full);
  background: linear-gradient(
    135deg,
    var(--color-primary-500) 0%,
    var(--color-primary-600) 100%
  );
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: var(--font-weight-semibold);
  font-size: ${(props) => {
    const size = parseInt(props.$size || "48");
    return `${size * 0.33}px`;
  }};
  flex-shrink: 0;
  box-shadow: var(--shadow-sm);
  overflow: hidden;
  position: relative;
  transition: transform var(--transition-normal);

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: var(--radius-full);
  }
`;
