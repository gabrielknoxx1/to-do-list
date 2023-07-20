import styled, { css } from "styled-components";

export const Container = styled.div<{ status: "pending" | "done" }>`
  max-height: 220px;
  border: 3px solid transparent;
  background-color: ${({ theme, status }) =>
    status === "done" ? theme["blue-300"] : theme["gray-300"]};
  display: flex;
  flex-direction: column;
  padding: 0.5rem 1rem;
  margin: 0.5rem 0px;
  border-radius: 0.5rem;

  &:hover {
    border: 3px solid ${({ theme }) => theme["purple-500"]};
  }

  > header {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 0.5rem;
  }

  > section {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    overflow: hidden;

    > strong {
      color: ${({ theme }) => theme["gray-700"]};
      font-size: 1.25rem;
    }
    > p {
      color: ${({ theme }) => theme["gray-500"]};
      font-size: 0.875rem;
    }
  }
`;
