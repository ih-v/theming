import styled from "styled-components";

export const Card = styled.div`
  background-color: ${({ theme }) => theme.colors.cardBgc};
  border: 1px solid ${({ theme }) => theme.colors.cardBorder};
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 20px;
  border-radius: 3px;
  max-width: 450px;
`;

export const CardTitle = styled.div`
  color: ${({ theme }) => theme.colors.cardTitle};
  border-bottom: 1px solid ${({ theme }) => theme.colors.cardBorder};
  text-align: center;
  padding: 10px;
  font-weight: bold;
`;

export const CardBody = styled.div`
  color: ${({ theme }) => theme.colors.cardBody};
  padding: 10px;
`;
