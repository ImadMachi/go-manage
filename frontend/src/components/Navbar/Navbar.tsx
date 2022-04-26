import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as S from "./Navbar.styled";

interface NavbarProps {
  setSidebarIsOpen: () => void;
}

const Navbar = ({ setSidebarIsOpen }: NavbarProps) => {
  const menuClickHandler = () => {
    setSidebarIsOpen();
  };

  return (
    <S.Nav>
      <S.Menu>
        <FontAwesomeIcon icon={faBars} onClick={menuClickHandler} />
      </S.Menu>
    </S.Nav>
  );
};

export default Navbar;
