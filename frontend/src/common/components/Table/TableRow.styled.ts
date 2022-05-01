import styled from "styled-components";

export const Container = styled.div``;

interface RowProps {
  colsLength: number;
  isTHeader?: boolean;
}
export const Row = styled.div<RowProps>`
  display: grid;
  width: 100%;
  /* overflow: hidden; */
  grid-template-columns: 60px repeat(${({ colsLength }) => colsLength - 1}, minmax(150px, 1fr));
  gap: 1px;
  padding: 1.3rem 0.5rem;
  border-bottom: 1px solid ${({ theme }) => theme.textTertiary};
  font-size: ${({ theme }) => theme.sm};
  color: ${({ theme }) => theme.textPrimary};
  font-weight: ${({ isTHeader }) => (isTHeader ? "bold" : "normal")};
`;

export const Col = styled.div`
  text-overflow: ellipsis;
  color: ${({ theme }) => theme.textPrimary};
  font-size: ${({ theme }) => theme.sm};
`;

interface DropdownProps {
  isOpen: boolean;
}
export const Dropdown = styled.ul<DropdownProps>`
  display: ${({ isOpen }) => (isOpen ? "block" : "none")};
  color: ${({ theme }) => theme.textSecondary};
  font-size: ${({ theme }) => theme.sm};
`;

export const DropdownItem = styled.li`
  padding: 0.5rem;
  text-transform: capitalize;
`;
