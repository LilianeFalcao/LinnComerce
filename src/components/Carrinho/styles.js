import styled from "styled-components";

export const CarrinhoContainer = styled.div`
  background-color: #f5f5f5;
  border: 1px solid #ddd;
  border-radius: 5px;
  padding: 10px;
  margin-top: 20px;
`;

export const CarrinhoTitle = styled.h2`
  margin-bottom: 10px;
`;
export const ItemContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #ccc;
  padding: 5px 0;
`;

export const ItemName = styled.span`
  font-weight: bold;
`;

export const ItemAmount = styled.span`
  color: #888;
`;

export const TotalContainer = styled.div`
  margin-top: 10px;
  text-align: right;
`;

export const TotalLabel = styled.span`
  font-weight: bold;
`;

export const TotalValue = styled.span`
  color: #00a650;
`;

export const ButtonCar = styled.button`
    width: 25px;
    height: 30px;
    margin-left: 5px;
    background-color: red;
    border: 1px solid #ccc;
    border-radius: 5px;
    cursor: pointer;
`

export const Images = styled.img`
    width: 80px;
    height: 100%;
    left: 0;
`
