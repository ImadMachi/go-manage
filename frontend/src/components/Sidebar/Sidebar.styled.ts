import styled from "styled-components";

interface SidebarProps {
  isOpen: boolean;
}
export const Sidebar = styled.div<SidebarProps>`
  background-color: ${({ theme }) => theme.menu.bg};
  position: fixed;
  z-index: 10;
  top: 0;
  left: 0;
  height: 100vh;
  width: 270px;
  padding: 0.6rem 1.5rem;
  margin-left: ${({ isOpen }) => (isOpen ? 0 : "-100%")};
  @media screen and (min-width: ${({ theme }) => theme.bp.lg}) {
    margin-left: 0;
  }
`;

export const Logo = styled.img`
  /* color: ${({ theme }) => theme.menu.textPrimary}; */
  /* font-size: ${({ theme }) => theme.lg}; */
  /* font-weight: bold; */
  /* text-transform: uppercase; */
  display: inline-block;
  width: 150px;
  text-align: center;
  margin: 0 auto;
  /* padding: 1.3rem; */
  /* font-style: italic; */
  /* display: none; */
  @media screen and (min-width: ${({ theme }) => theme.bp.lg}) {
    display: block;
  }
`;

export const Title = styled.h2`
  color: ${({ theme }) => theme.menu.textSecondary};
  font-size: ${({ theme }) => theme.sm};
`;
