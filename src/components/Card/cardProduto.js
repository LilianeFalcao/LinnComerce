import React from 'react';
import { Container, ProdutoNum, ProdutoName, ButtonCar, ImgProd} from './styles';

const CardProd = ({produtos, adicionarCarrinho}) => {

  return (
    <Container>
      <ProdutoNum>Id: {produtos.id}</ProdutoNum>
      <ProdutoName>Nome: {produtos.name}</ProdutoName>
      <ProdutoNum>Valor: {produtos.value}</ProdutoNum>
      <ImgProd src={produtos.imageUrl} alt={produtos.name} />
      <div>
      <ButtonCar onClick={() => {adicionarCarrinho(produtos)}} > Adicionar ao carrinho</ButtonCar>
      </div>
    </Container>
  );
}

export default CardProd;
