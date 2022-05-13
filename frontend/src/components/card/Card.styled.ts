import styled from "styled-components";

export const Container = styled.div`
  box-shadow: 0 2px 10px  rgba(0,0,0,0.1);
  max-width: 300px;
  width:100%
`;

export const Image = styled.img`
height: 100%;
width: 100%;
object-fit:cover;
`;

export const ImageContainer = styled.div`
height:70% ;
`;

export const Actions= styled.div`
height:30%;
padding: 5px 10px;
display: flex;
flex-direction: column;
justify-content:space-between;
text-align: center;
`

export const Title=styled.div`
font-family: sans-serif;
font-weight: bold;
color:black;
text-decoration:none
`

export const Price=styled.div`
font-family: sans-serif;
font-weight: bold;
`

