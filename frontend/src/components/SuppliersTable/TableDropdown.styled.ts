import styled from "styled-components";

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

export const EditIcon = styled.span`
  color: ${({ theme }) => theme.success};
`;

export const TrashIcon = styled.span`
  color: ${({ theme }) => theme.danger};
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
