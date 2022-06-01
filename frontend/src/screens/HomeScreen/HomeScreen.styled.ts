
import styled from "styled-components";

export const Container = styled.div`
`;

export const SubContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
  background-color: #F5F5F5; 
  padding: 0 8rem;
`;

export const ContainerText = styled.div`
`;
export const Button = styled.div`

`;

export const ContainerT = styled.div`
`;


export const ContainerImage = styled.img`
width: 500px;
`;
export const Text = styled.div`
margin: 10px;
text-align: center;

`;

export const Sub1Container = styled.div`
margin:35px auto;
padding: 0 8rem;
background-color:#FFFFFF;
`;


export const Tabs = styled.div`
  overflow: hidden;
  background: #fff;
  height: 3em;
`;

interface TabProps {
  active: boolean
}
export const Tab = styled.button<TabProps>`
  border: none;
  outline: none;
  cursor: pointer;
  width: 30%;
  position: relative;

  margin-right: 0.1em;
  font-size: 1em;
  border: ${props => (props.active ? "1px solid #ccc" : "")};
  border-bottom: ${props => (props.active ? "none" : "")};
  background-color: ${props => (props.active ? "white" : "lightgray")};
  height: ${props => (props.active ? "3em" : "2.6em; top:.4em")};
  transition: background-color 0.5s ease-in-out;

  :hover {
    background-color: white;
  }
`;
export const Content = styled.div<TabProps>`
  display: ${({active})=>active? 'grid': 'none'};
    grid-template-columns: 1fr 1fr;
    gap: 10px;
`;
export const Sub2Container=styled.div`
padding: 1rem 8rem;

`
export const Container1Image=styled.div`
display: grid;
grid-template-columns: 1fr 1fr 1fr 1fr;
row-gap: 2rem;`
 
 export const Title=styled.p`
  color:#C9C9C9;
`;
export const Image=styled.img``;
export const Sub3Container=styled.div`
`;
