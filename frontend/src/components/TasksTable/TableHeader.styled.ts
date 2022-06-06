import styled from "styled-components";

export const Container = styled.div`
  border-bottom: 1px solid ${({ theme }) => theme.textTertiary};
`;

interface RowProps {
  colsLength: number;
  isTHeader?: boolean;
}
export const Row = styled.div<RowProps>`
  display: grid;
  width: 100%;
  /* overflow: hidden; */
  grid-template-columns: 60px repeat(${({ colsLength }) => colsLength - 1}, minmax(150px, 1fr));
  gap: 10px;
  padding: 1.3rem 0.5rem;
  font-size: ${({ theme }) => theme.sm};
  color: ${({ theme }) => theme.textPrimary};
  font-weight: ${({ isTHeader }) => (isTHeader ? "bold" : "normal")};
`;

export const Col = styled.div`
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  color: ${({ theme }) => theme.textPrimary};
  font-size: ${({ theme }) => theme.sm};
  font-weight: bold;
`;
