import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
  background-color: #ffffff;
  display: flex;
  flex-direction: column-reverse;
  @media (min-width: ${({ theme }) => theme.bp.md}) {
    height: 100vh;
    display: grid;
    grid-template-columns: 2fr 1fr;
  }
`;

export const ImageLayer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    background-color: rgba(0, 0, 0, 0.4);

    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const FormContainer = styled.div`
  margin: auto;
  max-width: 25rem;
  width: 100%;
  height: 100%;
  padding: 1rem 1.5rem 2rem;
  flex-basis: 30%;
  @media (min-width: ${({ theme }) => theme.bp.md}) {
    overflow-y: auto;
    max-width: none;
  }
`;

export const Title = styled.h1`
  color: #495057;
`;

export const InputContainer = styled.div`
  @media (min-width: ${({ theme }) => theme.bp.md}) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 5px;
  }
`;
export const Message = styled.p`


margin: 15px 0 0;
  color: #b3b3b3;
  font-size: 12px;
`;

export const StyledLink = styled(Link)`
color: #4CAF50;
  text-decoration: none;
font-weight: bold;
`;
