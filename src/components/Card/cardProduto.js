import React from 'react';
import { Container, ProdutoNum, ProdutoName } from './styles';


const CardProd = (props) => {
  return (
    <Container>
      <ProdutoNum>Id: {props.produtos.id}</ProdutoNum>
      <ProdutoName>Nome: {props.produtos.name}</ProdutoName>
      <ProdutoNum>Valor: {props.produtos.value}</ProdutoNum>
      <img src={props.produtos.imageUrl} alt={props.produtos.name} />
      <button> Adicionar ao carrinho</button>
    </Container>
  );
}

export default CardProd;
