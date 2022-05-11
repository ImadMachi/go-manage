import styled from "styled-components";

const Button = styled.button`
  border: none;
  background: none;
  padding: 0.75rem 1.5rem;
  border-radius: 20px;
  color: white;
  background-color: ${({ theme }) => theme.secondary};
`;

export default Button;
