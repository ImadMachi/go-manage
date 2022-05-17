import styled from "styled-components";

export const Container = styled.div`

`;

export const SubContainer = styled.div`
display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 10px;
     background-color: #F5F5F5; 
    padding:100px;
`;

export const ContainerText = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
`;
export const Button = styled.div`

`;

export const ContainerImage = styled.img`
width: 100%;
`;
export const Text = styled.div`
margin: 10px;
text-align: center;

`;

export const Sub1Container = styled.div`
margin:20px;
padding: 20px;
background-color:#FFFFFF;
`;

export const TabsContainer =styled.div`
  max-width: 65em;

`;


  export const TabInput=styled.input`
position: absolute;
  left: -200vw;
&:first-child{
    checked

&:nth-child(3):checked{

}
}

`;
export const TabLabel=styled.label`
  position: relative;
  display: inline-block;
  padding: 15px 15px 25px;
  border: 1px solid transparent;
  border-bottom: 0;
  cursor: pointer;
  font-weight: 600;
  &::before{
    content: "";
  position: absolute;
  left: 15px;
  bottom: 10px;
  width: 22px;
  height: 4px;
  background: #8d8d8d;
  }
&:hover::after{

}
`;

export const TabSection=styled.section`
padding: 30px 0;
  border-top: 1px solid #ccc;
`;

export const TabPane=styled.div`
  display: none;

`;