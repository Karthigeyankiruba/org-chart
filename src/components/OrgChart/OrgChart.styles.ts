import styled from "styled-components";

export const FlowContainer = styled.div`
  width: 100%;
  height: 100%;
  background-color: #ffffff;

  .react-flow__node {
    cursor: grab;
  }

  .react-flow__node:active {
    cursor: grabbing;
  }
`;
