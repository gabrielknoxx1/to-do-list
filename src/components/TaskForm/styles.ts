import styled from "styled-components";

export const Container = styled.div`
  flex: 0.5;
  display: flex;
  align-items: center;
  justify-content: center;

  background-color: ${({ theme }) => theme["gray-400"]};

  > form {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100vh;
    gap: 20px;
    padding: 0px 3rem;

    > input,
    textarea {
      height: 2.5rem;
      border: none;
      background-color: ${({ theme }) => theme["gray-300"]};
      color: ${({ theme }) => theme.white};
      padding: 0.5rem 1rem;
      border-radius: 0.5rem;
      font-size: 0.875rem;
      &::placeholder {
        color: ${({ theme }) => theme.white};
      }

      &:focus {
        border: 1px solid ${({ theme }) => theme["purple-400"]};
      }
    }

    > textarea {
      resize: none;
      height: 190px;
    }

    > span {
      color: ${({ theme }) => theme.white};
      font-size: 0.625rem;
    }

    > button {
      background-color: ${({ theme }) => theme["blue-300"]};
      border: none;
      padding: 0.5rem 0;
      border-radius: 0.25rem;
      color: ${({ theme }) => theme.white};

      &:hover {
        background-color: ${({ theme }) => theme["blue-400"]};
      }
    }
  }
`;
