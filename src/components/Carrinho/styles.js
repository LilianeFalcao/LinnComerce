import styled from "styled-components";

export const CarrinhoContainer = styled.div`
  background-color: #ccc;
  border: 1px solid #ddd;
  border-radius: 5px;
  padding: 10px;
  margin-top: 20px;
  margin-bottom: 20px
`;

export const CarrinhoTitle = styled.h2`
  margin-bottom: 35px;
  display: flex;
  justify-content: center
`;
export const ItemContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid black;
  padding: 5px 0;
`;

export const ItemName = styled.span`
  font-weight: bold;
`;

export const ItemAmount = styled.span`
  color: #3f3d3d;
`;

export const TotalContainer = styled.div`
  margin-top: 10px;
  text-align: right;
  font-size: 25px
`;

export const TotalLabel = styled.span`
  font-weight: bold;
`;

export const TotalValue = styled.span`
  color: #139f24;
`;

export const ButtonCar = styled.button`
    width: 25px;
    height: 30px;
    margin-left: 5px;
    border: 1px solid #ccc;
    border-radius: 5px;
    cursor: pointer;
`

export const Images = styled.img`
    width: 120px;
    height: 100%;
    margin-left: 20px;
    left: 0;
`
