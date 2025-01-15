import React from 'react';
import { Container, ProdutoNum, ProdutoName, ButtonCar, ImgProd} from './styles';

//produtos da api
import { useFetch } from '../../hooks/useFetch';
import { UrlProdutos } from '../../constants/baseUrls';

const CardProd = ({produto, adicionarCarrinho}) => {

  const {loading , error} = useFetch(UrlProdutos);

  return (
    <Container>
      {loading && <p style={{ color: 'black' }}>Carregando dados...</p>}
      {error && <p>{error}</p>}
      
      <ProdutoNum>Id: {produto.id}</ProdutoNum>
      <ProdutoName>Nome: {produto.name}</ProdutoName>
      <ProdutoNum>Valor: {produto.value}</ProdutoNum>
      <ImgProd src={produto.imageUrl} alt={produto.name} />
      <ButtonCar onClick={() => adicionarCarrinho(produto)}>Adicionar ao carrinho</ButtonCar>
    </Container>
  );
};
export default CardProd;
