import { faBars, faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Input, TextInput } from "@mantine/core";
import { useContext } from "react";
import { ThemeContext } from "../..";
import { Icon } from "../../common/components/Icon";
import { darkTheme, lightTheme } from "../../common/style/theme";
import * as S from "./Navbar.styled";

interface NavbarProps {
  setSidebarIsOpen: () => void;
}

const Navbar = ({ setSidebarIsOpen }: NavbarProps) => {
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

  return (
<S.Nav>

      <S.Menu>
        <FontAwesomeIcon icon={faBars} onClick={menuClickHandler} />
      </S.Menu>
      <S.Right>
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
      </S.Right>


    </S.Nav>
  );
};

export default Navbar;
