import { faBars, faBell, faCaretDown, faGear, faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Input } from "@mantine/core";
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ThemeContext } from "../..";
import { Icon } from "../../common/components/Icon";
import { darkTheme, lightTheme } from "../../common/style/theme";
import { resetUser } from "../../features/slices/authSlice";
import { useAppDispatch } from "../../features/store";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import * as S from "./Navbar.styled";

interface NavbarProps {
  setSidebarIsOpen: () => void;
}

const Navbar = ({ setSidebarIsOpen }: NavbarProps) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const user = useTypedSelector((state) => state.authUser.userInfo.user);
  const menuClickHandler = () => {
    setSidebarIsOpen();
  };

  const setDarkModeHandler = () => {
    dispatch({ type: "setDark" });
    localStorage.setItem("goManage:mode", JSON.stringify(darkTheme));
  };

  const setLightModeHandler = () => {
    dispatch({ type: "setLight" });
    localStorage.setItem("goManage:mode", JSON.stringify(lightTheme));
  };
  const { theme, dispatch } = useContext(ThemeContext);

  const navigate = useNavigate();
  const appDispatch = useAppDispatch();
  const logout = () => {
    localStorage.removeItem("goManage:userInfo");
    appDispatch(resetUser());
    navigate("/");
  };

  return (
    <S.Nav>
      <S.Menu>
        <FontAwesomeIcon icon={faBars} onClick={menuClickHandler} />
      </S.Menu>
      <S.Right>
        <Input mr={10} type="search" placeholder="Search.." />
        {theme.type === "light" && (
          <Icon onClick={setDarkModeHandler}>
            <FontAwesomeIcon icon={faMoon} style={{ color: theme.textPrimary }} />
          </Icon>
        )}
        {theme.type === "dark" && (
          <Icon onClick={setLightModeHandler}>
            <FontAwesomeIcon icon={faSun} style={{ color: theme.textPrimary }} />
          </Icon>
        )}
        <S.Notification>
          <Icon>
            <FontAwesomeIcon icon={faBell} style={{ color: "#f46a6a" }} />
          </Icon>
        </S.Notification>
        {!!user && (
          <S.Dropdown>
            <S.DropdownHeader onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
              <S.DropdownTitle>{user.firstName}</S.DropdownTitle>
              <FontAwesomeIcon icon={faCaretDown} />
            </S.DropdownHeader>
            <S.DropdownMenu isOpen={isDropdownOpen}>
              <S.Link to="/dashboard/profile">
                <S.DropdownItem>Profile</S.DropdownItem>
              </S.Link>
              <S.DropdownItem onClick={logout}>Logout</S.DropdownItem>
            </S.DropdownMenu>
          </S.Dropdown>
        )}
        <Icon>
          <FontAwesomeIcon icon={faGear} style={{ color: theme.textSecondary }} />
        </Icon>
      </S.Right>
    </S.Nav>
  );
};

export default Navbar;
