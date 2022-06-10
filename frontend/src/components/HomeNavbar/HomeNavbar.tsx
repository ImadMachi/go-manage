import { useNavigate } from "react-router-dom";
import { Button } from "@mantine/core";

import * as S from "./HomeNavbar.styled";
const HomeNavbar = () => {
  const navigate = useNavigate();
  return (
    <S.Container>
      <S.ContainerImage>
        <S.Image src="/images/logo.png" alt="" />
      </S.ContainerImage>
      <S.Cnav>
        <S.Lien1>Home</S.Lien1>
        <S.Lien2>About</S.Lien2>
        <S.Lien3>Blog</S.Lien3>
        <S.Lien4>About</S.Lien4>
        <S.Lien5>Protfolio</S.Lien5>

        <S.Animation></S.Animation>
      </S.Cnav>
      <div>
        <Button ml={15} onClick={() => navigate("/signup")}>
          Sign Up
        </Button>
      </div>
    </S.Container>
  );
};

export default HomeNavbar;
