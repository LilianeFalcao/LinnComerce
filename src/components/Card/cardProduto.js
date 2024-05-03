import React from 'react';
import { Container, ProdutoNum, ProdutoName, ButtonCar} from './styles';

const CardProd = (props) => {
  return (
    <Container>
      <ProdutoNum>Id: {props.produtos.id}</ProdutoNum>
      <ProdutoName>Nome: {props.produtos.name}</ProdutoName>
      <ProdutoNum>Valor: {props.produtos.value}</ProdutoNum>
      <img src={props.produtos.imageUrl} alt={props.produtos.name} />
      <ButtonCar> Adicionar ao carrinho</ButtonCar>
      <ButtonCar>ver carrinho</ButtonCar>
    </Container>
  );
}

export default CardProd;
