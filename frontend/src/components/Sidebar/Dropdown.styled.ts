import styled from "styled-components";

export const Dropdown = styled.div``;

export const Title = styled.div`
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.menu.textSecondary};

  &:first-child {
    font-size: ${({ theme }) => theme.md};
  }
  h2 {
    font-weight: normal;
    margin-left: 0.8rem;
    margin-right: auto;
    font-size: ${({ theme }) => theme.md};
  }
  &:hover {
    color: ${({ theme }) => theme.menu.textPrimary};
  }
`;

interface IconProps {
  isOpen: boolean;
}
export const Icon = styled.span<IconProps>`
  transform: ${({ isOpen }) => (isOpen ? "rotate(-180deg)" : "rotate(0)")};
  transition: all 0.3s;
`;

interface ItemsListProps {
  isOpen: boolean;
  maxHeight: string;
}
export const ItemsList = styled.ul<ItemsListProps>`
  list-style: none;
  color: ${({ theme }) => theme.menu.textSecondary};
  text-transform: capitalize;
  padding: 0 2rem;
  margin: 0;
  max-height: ${({ isOpen, maxHeight }) => (isOpen ? maxHeight : 0)};
  overflow: hidden;
  transition: max-height 0.3s ease-in-out;
  a {
    text-decoration: none;
  }
`;

export const Item = styled.li`
  line-height: 2.4rem;
  color: ${({ theme }) => theme.menu.textSecondary};
  &:hover,
  .current > & {
    color: ${({ theme }) => theme.menu.textPrimary};
  }
`;
