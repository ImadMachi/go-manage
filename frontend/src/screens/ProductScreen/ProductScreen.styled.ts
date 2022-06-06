import styled from "styled-components";

export const Screen = styled.div``;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ModalTitle = styled.h2`
  margin-top: 0;
`;

export const Button = styled.button`
  background-color: ${({ theme }) => theme.secondary};
  border: none;
  color: white;
  border-radius: 8px;
  padding: 10px;
`;

export const Title = styled.h2`
  font-size: ${({ theme }) => theme.md};
  color: ${({ theme }) => theme.textPrimary};
  text-transform: uppercase;
  margin: 1.5rem 0;
`;

interface ContainerProps {
  width: number;
}
export const Container = styled.div<ContainerProps>`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  padding: 1rem 0;
  gap: 15px;
  justify-items: center;
  grid-template-columns: ${({ width }) =>
    width < 400
      ? "repeat(2, 1fr)"
      : width < 600
      ? "repeat(3, 1fr)"
      : width < 800
      ? "repeat(4, 1fr)"
      : width < 1000
      ? "repeat(5, 1fr)"
      : "repeat(6, 1fr)"};
`;
