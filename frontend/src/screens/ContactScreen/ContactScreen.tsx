import { faEnvelope, faLocationDot, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import HomeNavbar from "../../components/HomeNavbar";
import * as S from "./ContactScreen.styled";
const ContactScreen = () => {
  return (
    <div>
      <HomeNavbar />
      <S.Contact>
        <S.Content>
          <S.Th2>Contact Us </S.Th2>
          <S.Tp>
            Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression.<br></br> Le Lorem
            Ipsum est le faux texte standard de l'imprimerie depuis les années 1500,
          </S.Tp>
        </S.Content>

        <S.Container>
          <S.ContactInfo>
            <S.Box>
              <S.Icon>
                <FontAwesomeIcon icon={faLocationDot}></FontAwesomeIcon>
              </S.Icon>
              <S.Text>
                <S.Th>Address</S.Th>
                <S.Tp>97, El Berdai Jdida, Assouel , Marrakech 40000, 40000</S.Tp>
              </S.Text>
            </S.Box>

            <S.Box>
              <S.Icon>
                <FontAwesomeIcon icon={faPhone}></FontAwesomeIcon>
              </S.Icon>
              <S.Text>
                <S.Th>Phone</S.Th>
                <S.Tp>+212 606 035 801</S.Tp>
              </S.Text>
            </S.Box>

            <S.Box>
              <S.Icon>
                <FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>
              </S.Icon>
              <S.Text>
                <S.Th>Email</S.Th>
                <S.Tp>skitinanouhaila6@gmail.com</S.Tp>
              </S.Text>
            </S.Box>
          </S.ContactInfo>

          <S.ContactForm>
            <form>
              <S.Th22>Send Message</S.Th22>

              <S.InputBox>
                <S.SInput type="text" name="" required />
                <S.Sspan>Full Name</S.Sspan>
              </S.InputBox>

              <S.InputBox>
                <S.SInput type="text" name="" required />
                <S.Sspan>Email</S.Sspan>
              </S.InputBox>

              <S.InputBox>
                <S.STextArea
                  //  type='text'
                  //   name=''
                  required
                />
                <S.Sspan>Type your Message</S.Sspan>
              </S.InputBox>

              <S.InputBox>
                <S.SInpute type="Submit" name="" value="Send" />
                {/* <S.Sspan>Email</S.Sspan> */}
              </S.InputBox>
            </form>
          </S.ContactForm>
        </S.Container>
      </S.Contact>
    </div>
  );
};

export default ContactScreen;
