import styled from "styled-components";
export const Wrapper = styled.div`
 margin: 0 auto;
  padding: 40px;
  max-width: 800px;


`;
export const Table = styled.div`
margin: 0 0 40px 0;
  width: 100%;
  box-shadow: 0 1px 3px rgba(0,0,0,0.2);
  display: table;
  @media screen and (max-width: 580px){
    display: block;
  }

`;
export const Cell=styled.div`
 display: table-row;
  background: #111;
 

`;
export const Rowheader=styled.div`
`;

