import styled from "styled-components";

export const Screen = styled.div``;

export const Title = styled.h2`
  font-size: ${({ theme }) => theme.md};
  color: ${({ theme }) => theme.textPrimary};
  text-transform: uppercase;
  margin: 1.5rem 0;
`;

export const Search = styled.div`
  padding: 0.5rem 1.5rem;
  border: solid 1px ${({ theme }) => theme.textSecondary};
  border-radius: 10px;
  color: ${({ theme }) => theme.textSecondary};
`;

export const AddCustomer = styled.div`
  padding: 0.5rem 1.5rem;
  border: solid 1px ${({ theme }) => theme.textSecondary};
  border-radius: 10px;
  color: ${({ theme }) => theme.textSecondary};
`;

export const Container = styled.div`
  padding: 1rem;
  background-color: ${({ theme }) => theme.bgPrimary};
`;

export const ModalTitle = styled.h2`
  margin-top: 0;
`;
