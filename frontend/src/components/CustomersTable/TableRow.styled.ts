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
  gap: 10px;
  padding: 1.3rem 0.5rem;
  border-bottom: 1px solid ${({ theme }) => theme.textTertiary};
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
`;

const IsStatus = styled.span`
  display: inline-block;
  padding: 0.2rem 0.3rem;
  font-weight: bold;
  position: relative;
  &::after {
    content: "";
    position: absolute;
    inset: 0;
    opacity: 0.1;
    border-radius: 5px;
  }
`;

export const IsActive = styled(IsStatus)`
  color: ${({ theme }) => theme.success};
  &::after {
    background-color: ${({ theme }) => theme.success};
  }
`;

export const IsBlocked = styled(IsStatus)`
  color: ${({ theme }) => theme.danger};
  &::after {
    background-color: ${({ theme }) => theme.danger};
  }
`;
