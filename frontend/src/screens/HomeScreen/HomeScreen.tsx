
import { Button } from "@mantine/core";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import CardHome from "../../components/CardHome";
import HomeNavbar from "../../components/HomeNavbar";
import * as S from "./HomeScreen.styled";
import Footer from "../../components/Footer";

const HomeScreen = () => {
  const navigate = useNavigate();
  const [active, setActive] = useState(0);
  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const target  = e.target as Element
    const index = parseInt(target.id, 0);
    if (index !== active) {
      setActive(index);
    }
  }

  return( 
<S.Container>
  <HomeNavbar/>
<S.SubContainer>
  <S.ContainerText>
<h1>AI Driven CRM for your Sales Force</h1>
<p>Close more deals than ever, automatice lead captures,in-built phone,</p>
  
  <p>smart alerts with push notifcations.</p>
    
   <div><Button onClick={()=>navigate('/signup')}>Sing Up</Button></div>
   </S.ContainerText>
<S.ContainerImage src='/images/img1.jpg' />
</S.SubContainer>
<S.Sub1Container>

<S.Text><h1>Why CRM?</h1>
  Close more deals than ever, automatice lead captures,in-built phone,smart alerts with push notifcations.</S.Text>
  <S.Tabs>
 
  <S.Tab onClick={handleClick} active={active === 0} id='0'>Use Built-in Phone and Email</S.Tab>

 
  <S.Tab onClick={handleClick} active={active === 1} id='1'>Find the Best Sales Leads</S.Tab>

  <S.Tab onClick={handleClick} active={active === 2} id='2'>Find the Best Sales Leads</S.Tab>


  </S.Tabs>
  <>
  <S.Content active={active === 0}>
    
   <S.ContainerT>
  <h2>Finds the best Sales leads</h2>

    <p>Li Europan lingues es membres del sam familie. </p>
    <p>  Lor separat existentie es un myth. Por scientie,</p>
    <p> musica, sport etc, litot Europa usa li sam</p>
    <p> vocabular. Li lingues differe solmen in li </p>
    
    </S.ContainerT>
    <S.ContainerImage src='/images/img2.png' />
   
  </S.Content>
  <S.Content active={active === 1}>
 


<S.ContainerT>
<h2>Finds the best Sales leads</h2>

    <p>CRM used Bootstrap, the most popular HTML, CSS, and JS framework. Thanks </p>
    <p> to this developers without experience can modify code without any</p>
    <p>problems.</p>
    <h2> More UI Components </h2>
    <p> They are designed for simple and flexible user interface (UI) rendering.</p>
    </S.ContainerT>
<S.ContainerImage src='/images/img3.png' />

    </S.Content>


    <S.Content active={active === 2}>
    <S.ContainerT>
    <h2>Finds the best Sales leads</h2>
 
    <p>Li Europan lingues es membres del sam familie. </p>
    <p>  Lor separat existentie es un myth. Por scientie,</p>
    <p> musica, sport etc, litot Europa usa li sam</p>
    <p> vocabular. Li lingues differe solmen in li </p>
    <p> grammatica, li pronunciation e li plu commun </p>
    <p>   vocabules. Omnicos directe al desirabilite de un </p>
    <p>   nov lingua franca: On refusa continuar.</p>
    </S.ContainerT>
    <S.ContainerImage src='/images/img4.png' />
   
    </S.Content>

    <S.Content active={active === 3}>
   <S.ContainerT>
   <h2>Finds the best Sales leads</h2>
    
    <p>We used CSS3 for most of our components to avoid using unnecessary </p>
    <p> JavaScript libraries. All this to make it fast, reliable and pleasant to use by</p>
    <p>everyone!</p>
    </S.ContainerT>
    <S.ContainerImage src='/images/img5.png' />
   
   
    </S.Content>

    </>

</S.Sub1Container>
<S.Sub2Container>
< CardHome />
</S.Sub2Container>
<S.Sub1Container>
  <h1>Integrations</h1>
  <S.Title>Go Manage integrates with your favorite tools</S.Title>
  <S.Container1Image>
    <S.Image src='images/im1.png' />
    <S.Image src='images/im2.png' />
    <S.Image src='images/im3.png' />
    <S.Image src='images/im4.png' />
  </S.Container1Image>
</S.Sub1Container>
< Footer />


</S.Container>
  )
};



export default HomeScreen
