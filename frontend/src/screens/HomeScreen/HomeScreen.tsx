
import { Button } from "@mantine/core";
import { Navigate, useNavigate } from "react-router-dom";
import * as S from "./HomeScreen.styled";

const HomeScreen = () => {
  const navigate = useNavigate();

  return( 
<S.Container>
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
<S.TabsContainer>
  <S.TabInput type="radio" id="tab1" checked/>
  <S.TabLabel htmlFor="tab1">Use Built-in Phone and Email</S.TabLabel>

  <S.TabInput type="radio" id="tab2" checked/>
  <S.TabLabel htmlFor="tab2">Find the Best Sales Leads</S.TabLabel>

  <S.TabInput type="radio" id="tab3" checked/>
  <S.TabLabel htmlFor="tab3">Find the Best Sales Leads</S.TabLabel>

  <S.TabInput type="radio" id="tab4" checked/>
  <S.TabLabel htmlFor="tab3">Manage Sales Pipeline Better</S.TabLabel>

  <S.TabPane>
    <S.TabSection id="marzen"></S.TabSection>
    <div>
    <h2>Finds the best Sales leads</h2>
    <p>Li Europan lingues es membres del sam familie. </p>
    <p>  Lor separat existentie es un myth. Por scientie,</p>
    <p> musica, sport etc, litot Europa usa li sam</p>
    <p> vocabular. Li lingues differe solmen in li </p>
    <p> grammatica, li pronunciation e li plu commun </p>
    <p>   vocabules. Omnicos directe al desirabilite de un </p>
    <p>   nov lingua franca: On refusa continuar.</p>
    <S.ContainerImage src='/images/img2.png' />
    </div>
</S.TabPane>

<S.TabPane>
  <div>
<S.ContainerImage src='/images/img3.png' />
    <S.TabSection id="marzen"></S.TabSection>
    
    <h2>Finds the best Sales leads</h2>
    <p>CRM used Bootstrap, the most popular HTML, CSS, and JS framework. Thanks </p>
    <p> to this developers without experience can modify code without any</p>
    <p>problems.</p>
    <h2> More UI Components </h2>
    <p> They are designed for simple and flexible user interface (UI) rendering.</p>
   
   
    </div>
</S.TabPane>


<S.TabPane>
    <S.TabSection id="marzen"></S.TabSection>
    <div>
    <h2>Finds the best Sales leads</h2>
    <p>Li Europan lingues es membres del sam familie. </p>
    <p>  Lor separat existentie es un myth. Por scientie,</p>
    <p> musica, sport etc, litot Europa usa li sam</p>
    <p> vocabular. Li lingues differe solmen in li </p>
    <p> grammatica, li pronunciation e li plu commun </p>
    <p>   vocabules. Omnicos directe al desirabilite de un </p>
    <p>   nov lingua franca: On refusa continuar.</p>
    <S.ContainerImage src='/images/img4.png' />
    </div>
</S.TabPane>

<S.TabPane>
  <div>
    <S.TabSection id="marzen"></S.TabSection>
    
    <h2>Finds the best Sales leads</h2>
    <p>We used CSS3 for most of our components to avoid using unnecessary </p>
    <p> JavaScript libraries. All this to make it fast, reliable and pleasant to use by</p>
    <p>everyone!</p>
   
   
<S.ContainerImage src='/images/img5.png' />
   
    </div>
</S.TabPane>

</S.TabsContainer>
 

</S.Sub1Container>

</S.Container>
  )
};



export default HomeScreen;
