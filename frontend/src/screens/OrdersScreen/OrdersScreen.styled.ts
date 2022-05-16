import styled from "styled-components";

export const Screen = styled.div``;

export const Title = styled.h2`
  font-size: ${({ theme }) => theme.md};
  color: ${({ theme }) => theme.textPrimary};
  text-transform: uppercase;
  margin: 1.5rem 0;
`;

export const Search = styled.input`
  padding: 0.4rem 0.5rem;
  border: solid 0.5px ${({ theme }) => theme.textTertiary};
  border-radius: 10px;
  background-color: ${({ theme }) => theme.bgSecondary};
  color: ${({ theme }) => theme.textSecondary};
`;

export const Container = styled.div`
  padding: 1rem;
  background-color: ${({ theme }) => theme.bgPrimary};
`;

export const ModalTitle = styled.h2`
  margin-top: 0;
`;
