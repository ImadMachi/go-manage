
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
  ${props => (props.active ? "" : "display:none")}
  display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 10px;
`;
