import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  height: 100vh;
  overflow: hidden;
`;

export const Content = styled.div`
  flex: 1;
  border: 1px solid ${({ theme }) => theme["gray-500"]};
  margin: 8rem;
  border-radius: 0.5rem;
  padding: 1rem;
  overflow-x: hidden;

  > strong {
    color: ${({ theme }) => theme["gray-200"]};
  }
`;
