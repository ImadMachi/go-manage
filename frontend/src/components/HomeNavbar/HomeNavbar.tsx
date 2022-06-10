import { Link,useNavigate } from 'react-router-dom';
import { Button } from "@mantine/core";

import * as S from "./HomeNavbar.styled";
const HomeNavbar = () => {
  const navigate = useNavigate();
  return (
    <S.Container>
        <S.ContainerImage >
          <S.Image src='/images/logo.png' alt='' />
        </S.ContainerImage>
            <S.Cnav>
                <Link to='/'> <S.Lien1>Home</S.Lien1></Link>
               
                <Link to='/about'  > <S.Lien2>About</S.Lien2></Link>
               
                <Link to='/blog'> <S.Lien3>Blog</S.Lien3> </Link>
          
                <Link to='/contact'> <S.Lien4>Contact</S.Lien4></Link>
               
                
      

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
