import styled from "styled-components";

export const Container = styled.div`
  box-shadow: 0 2px 10px 2px rgba(0, 0, 0, 0.1);
  max-width: 300px;
  width: 100%;
  background-color: ${({ theme }) => theme.bgPrimary};
  padding: 0 0 8px;
`;

export const Image = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
`;

export const ImageContainer = styled.div`
  min-height: 150px;
  height: 70%;
  width: 100%;
`;

export const Actions = styled.div`
  height: 30%;
  padding: 5px 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-align: center;
`;

export const Title = styled.div`
  font-size: 1.3rem;
  font-style: italic;
  font-weight: bold;
  color: ${({ theme }) => theme.textPrimary};
  margin-bottom: 0.5rem;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const Price = styled.div`
  color: ${({ theme }) => theme.textSecondary};
  margin-top: 0.7rem;
  font-size: 1.5rem;
`;
