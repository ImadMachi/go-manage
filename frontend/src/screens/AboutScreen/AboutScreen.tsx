import { faFacebook, faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import HomeNavbar from "../../components/HomeNavbar";
import * as S from "./AboutScreen.styled";

const AboutScreen = () => {
  return (
    <div>
      <HomeNavbar />
      <S.SSection>
        <S.Container>
          <S.ContentSection>
            <S.Title>
              <S.Th1>About Us </S.Th1>
            </S.Title>
            <S.Content>
              <S.Th3>Lorem Ipsum</S.Th3>
              <S.Tp>
                Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum
                est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux
                de texte pour réaliser un livre spécimen de polices de texte. Il n'a pas fait que survivre cinq siècles, mais s'est aussi
                adapté à la bureautique informatique, sans que son contenu n'en soit modifié. Il a été popularisé dans les années 1960 grâce
                à la vente de feuilles Letraset contenant des passages du Lorem Ipsum, et, plus récemment, par son inclusion dans des
                applications de mise en page de texte, comme Aldus PageMaker.
              </S.Tp>
              <S.Tbutton>
                <S.StyledLink to="../HomeScreen">Read More</S.StyledLink>
              </S.Tbutton>
            </S.Content>
            <S.Social>
              <S.Icon>
                <FontAwesomeIcon icon={faFacebook} />
              </S.Icon>
              <S.Icon>
                <FontAwesomeIcon icon={faInstagram} />
              </S.Icon>
              <S.Icon>
                <FontAwesomeIcon icon={faTwitter} />
              </S.Icon>
            </S.Social>
          </S.ContentSection>
          <S.ContainerImage>
            <S.Image src="./images/ab.jpg" />
          </S.ContainerImage>
        </S.Container>
      </S.SSection>
    </div>
  );
};

export default AboutScreen;
