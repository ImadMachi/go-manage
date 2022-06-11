import styled from "styled-components";

export const Title = styled.div`
  color: ${({ theme }) => theme.textTertiary};
  margin: 1rem 0 0;
`;

interface RowProps {
  cols: number;
}
export const Row = styled.div<RowProps>`
  display: grid;
  grid-template-columns: ${({ cols }) =>
    Array.from(Array(cols).keys())
      .map((_) => "1fr")
      .join(" ")};
  gap: 1rem;
`;

export const InputLabel = styled.span`
  color: ${({ theme }) => theme.textPrimary};
`;
