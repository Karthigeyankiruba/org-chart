import styled from "styled-components";

export const Aside = styled.aside`
  width: 320px;
  background-color: var(--color-background-gray);
  border-right: 1px solid var(--color-gray-200);
  height: 100vh;
  overflow-y: auto;
  flex-shrink: 0;
`;

export const AsideContent = styled.div`
  padding: var(--spacing-xl);
`;
