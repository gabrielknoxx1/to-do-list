import styled from "styled-components";

export const Container = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  border: none;

  color: ${({ theme }) => theme["purple-400"]};

  &:hover {
    color: ${({ theme }) => theme["purple-500"]};
  }
`;
