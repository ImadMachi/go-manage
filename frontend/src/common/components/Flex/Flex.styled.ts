import styled from "styled-components";

interface FlexProps {
  justifyContent?: string;
  alignItems?: string;
}
export const Flex = styled.div<FlexProps>`
  display: flex;
  justify-content: ${({ justifyContent }) => justifyContent || "flex-start"};
  align-items: ${({ alignItems }) => alignItems || "stretch"};
`;
