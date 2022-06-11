import { faKey, faSignOut, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import UserChangePassword from "../../components/UserChangePassword";
import UserDetails from "../../components/UserDetails";
import { resetUser } from "../../features/slices/authSlice";
import { useAppDispatch } from "../../features/store";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import * as S from "./ProfileScreen.styled";

const ProfileScreen = () => {
  const [sideTitle, setSideTitle] = useState(1);

  const user = useTypedSelector((state) => state.authUser.userInfo.user);
  const navigate = useNavigate();
  const appDispatch = useAppDispatch();
  const logout = () => {
    localStorage.removeItem("goManage:userInfo");
    appDispatch(resetUser());
    navigate("/");
  };
  return (
    <S.Screen>
      <S.Side>
        <S.Image src="/images/avatar.webp" alt="avatar" />
        <S.Navigation>
          <S.NavigationItem isSelected={sideTitle === 1} onClick={() => setSideTitle(1)}>
            <FontAwesomeIcon icon={faUser} />
            <S.NavigationTitle>Account Details</S.NavigationTitle>
          </S.NavigationItem>
          <S.NavigationItem isSelected={sideTitle === 2} onClick={() => setSideTitle(2)}>
            <FontAwesomeIcon icon={faKey} />
            <S.NavigationTitle>Change Password</S.NavigationTitle>
          </S.NavigationItem>
          <S.NavigationItem onClick={logout}>
            <FontAwesomeIcon icon={faSignOut} />
            <S.NavigationTitle>Logout</S.NavigationTitle>
          </S.NavigationItem>
        </S.Navigation>
      </S.Side>
      <S.Main>
        {user && sideTitle === 1 && <UserDetails user={user} />}
        {user && sideTitle === 2 && <UserChangePassword user={user} />}
      </S.Main>
    </S.Screen>
  );
};

export default ProfileScreen;
