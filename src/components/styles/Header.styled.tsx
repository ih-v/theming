import { styled } from "styled-components";

export const Header = styled.header`
  position: sticky;
  top: 0;
  background-color: ${({ theme }) => theme.colors.header};
  padding: 20px;
  text-align: center;
  font-weight: bold;
`;
