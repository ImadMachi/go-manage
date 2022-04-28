import { NavLink as BaseNavLink } from "react-router-dom";

interface NavLinkProps {
  to: string;
}

const NavLink: React.FC<NavLinkProps> = ({ to, children }) => (
  <BaseNavLink to={to} className={({ isActive }: { isActive: boolean }) => (isActive ? "current" : undefined)}>
    {children}
  </BaseNavLink>
);

export default NavLink;
