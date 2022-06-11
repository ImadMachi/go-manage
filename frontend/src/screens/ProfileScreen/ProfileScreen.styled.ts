import styled from "styled-components";

export const Screen = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr;
  gap: 2rem;
  background-color: ${({ theme }) => theme.bgPrimary};
  margin-top: 1rem;
  min-height: 80vh;
  padding: 0.5rem;
`;

export const Side = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Main = styled.div``;

export const Image = styled.img`
  width: 60%;
`;

export const Navigation = styled.div`
  border-radius: 5px;
  box-shadow: 0 0 5px 1px rgba(0, 0, 0, 0.1);
  align-self: stretch;
  margin-top: 1rem;
  overflow: hidden;
  cursor: pointer;
`;

interface NavigationItemProps {
  isSelected?: boolean;
}
export const NavigationItem = styled.div<NavigationItemProps>`
  padding: 1rem 0.7rem;

  &:hover {
    background-color: ${({ theme }) => theme.primary};
    color: #eee;
    opacity: ${({ isSelected }) => (isSelected ? 1 : 0.8)};
  }
  background-color: ${({ isSelected, theme }) => (isSelected ? theme.primary : "none")};
  color: ${({ isSelected, theme }) => (isSelected ? "#eee" : theme.textSecondary)};
`;

export const NavigationTitle = styled.span`
  margin-left: 1rem;
`;
