import styled from "styled-components";

const Button = styled.button`
  border: none;
  background: none;
  padding: 0.5rem 1.5rem;
  border-radius: 10px;
  color: white;
  background-color: ${({ theme }) => theme.primary};
`;

export default Button;
