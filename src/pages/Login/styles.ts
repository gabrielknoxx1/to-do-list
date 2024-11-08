import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: ${({ theme }) => theme["gray-600"]};
  color: ${({ theme }) => theme.white};

  form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 300px;
    background-color: ${({ theme }) => theme["gray-400"]};
    padding: 1rem;
    border-radius: 0.5rem;
  }

  input,
  button {
    height: 2.5rem;
    border: none;
    background-color: transparent;
    color: ${({ theme }) => theme.white};
    padding: 0.5rem 1rem;
    border-radius: 0.5rem;
    font-size: 0.875rem;
  }

  button {
    background-color: ${({ theme }) => theme["blue-300"]};
    cursor: pointer;

    &:hover {
      background-color: ${({ theme }) => theme["blue-400"]};
    }
  }

  a {
    color: ${({ theme }) => theme["purple-400"]};
    text-decoration: none;

    &:hover {
      color: ${({ theme }) => theme["purple-500"]};
    }
  }
`;
