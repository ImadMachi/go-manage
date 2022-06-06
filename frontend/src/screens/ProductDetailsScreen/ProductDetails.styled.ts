import styled from "styled-components";

export const Container = styled.div`
  max-width: 1000px;
  width: 100%;
  height: 500px;
  margin: 100px auto;
  box-shadow: 0 2px 7px 3px rgba(0, 0, 0, 0.1);
  display: grid;
  grid-template-columns: 1fr 1fr;
  background-color: ${({ theme }) => theme.bgPrimary};
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
`;

export const ImageContainer = styled.div`
  /* height:70% ; */
`;

export const Actions = styled.div`
  padding: 20px 25px;
  text-align: center;
`;
export const Category = styled.div`
  display: inline-block;
  margin-left: 10px;
  color: white;
  background-color: ${({ theme }) => theme.menu.bg};
  padding: 2px 7px;
  margin-bottom: 10px;
`;

export const ContainerPrice = styled.div`
  display: flex;
`;

export const Title = styled.div`
  font-family: Papyrus;
  /* font-style: italic; */
  text-align: center;
  font-size: 2.5rem;
  color: ${({ theme }) => theme.textSecondary};
  padding: 10px;
`;
export const Description = styled.div`
  color: #888;
  padding: 5px;
`;
export const Rating = styled.div`
  padding: 5px;
`;
export const Price = styled.div`
  font-size: 25px;
  font-weight: bold;
  font-family: "Lucida Handwriting";
  color: ${({ theme }) => theme.textPrimary};
  padding: 5px;
`;
