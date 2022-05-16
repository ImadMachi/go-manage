import styled from "styled-components";

const Button = styled.button`
  border: none;
  background: none;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  color: white;
  background-color: ${({ theme }) => theme.secondary};
`;

export default Button;
