import styled from "styled-components";

export const Label = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
`

export const Container=styled.div`
margin-top: 1rem;
display: grid;
grid-template-columns: 1fr 1fr;
gap: 1rem;
`;

export const Title=styled.p`
color:#8B8A9C;

`;

export const Text=styled.p`
color: #495057;
font-weight: bold;

`;

export const Container1=styled.div`
background-color: ${({theme})=>theme.bgPrimary};
padding: 20px;

`;
export const Sp=styled.span`
color: #0AB39C;
background-color: ${({theme})=>theme.bgSecondary};
`
export const IconCointainer=styled.span`
background-color: ${({theme})=>theme.bgSecondary};
color: ${({theme})=>theme.textSecondary};
display: flex;
padding: 20px;
justify-content: center;
border-radius: 50%;
`;