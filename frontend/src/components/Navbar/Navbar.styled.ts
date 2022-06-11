import { Link as RouterLink } from "react-router-dom";
import styled from "styled-components";

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.2rem;
  background-color: ${({ theme }) => theme.bgPrimary};
`;

export const Menu = styled.div``;

export const Right = styled.div`
  display: flex;
  align-items: center;
`;

export const Notification = styled.span`
  position: relative;
`;

export const NotificationCounter = styled.div`
  position: absolute;
  top: -5px;
  right: 0;
  width: 10px;
  height: 10px;
  font-size: 12px;
  border-radius: 50%;
  font-weight: bolder;
`;

export const Dropdown = styled.span`
  cursor: pointer;
  display: inline-block;
  padding: 0 0.5rem;
  color: ${({ theme }) => theme.textPrimary};
  display: flex;
  align-items: center;
  position: relative;
`;

interface DropdownMenuProps {
  isOpen: boolean;
}
export const DropdownMenu = styled.div<DropdownMenuProps>`
  position: absolute;
  top: 30px;
  left: 0;
  background-color: ${({ theme }) => theme.bgPrimary};
  display: ${({ isOpen }) => (isOpen ? "block" : "none")};
  width: 100px;
`;

export const DropdownHeader = styled.div`
  display: flex;
  align-items: center;
`;

export const DropdownTitle = styled.div`
  font-size: 1.3rem;
  margin-right: 3px;
`;

export const DropdownItem = styled.div`
  padding: 0.4rem 0.7rem;
  &:hover {
    background-color: ${({ theme }) => theme.bgSecondary};
  }
`;

export const Link = styled(RouterLink)`
  &:visited {
    color: ${({ theme }) => theme.textPrimary};
  }
`;
