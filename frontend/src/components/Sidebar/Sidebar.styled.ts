import styled from "styled-components";

interface SidebarProps {
  isOpen: boolean;
}
export const Sidebar = styled.div<SidebarProps>`
  background-color: ${({ theme }) => theme.menu.bg};
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 260px;
  padding: 0.6rem 1.5rem;
  margin-left: ${({ isOpen }) => (isOpen ? 0 : "-100%")};
`;

export const Logo = styled.div`
  color: ${({ theme }) => theme.menu.textPrimary};
  font-size: ${({ theme }) => theme.lg};
  font-weight: bold;
  text-transform: uppercase;
  text-align: center;
  padding: 1.3rem;
  font-style: italic;
  display: none;
  @media screen and (min-width: ${({ theme }) => theme.bp.md}) {
    display: block;
  }
`;

export const Title = styled.h2`
  color: ${({ theme }) => theme.menu.textSecondary};
  font-size: ${({ theme }) => theme.md};
`;
