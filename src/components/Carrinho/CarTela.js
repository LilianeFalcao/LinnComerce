import React from "react";
import { CarrinhoContainer,Images, ButtonCar, CarrinhoTitle, ItemContainer, ItemName, ItemAmount, TotalContainer, TotalLabel, TotalValue } from './styles';

const Carrinho = ({cart, removerCarrinho}) => {

    const getTotal = () => {
        return cart.reduce((total, produto) => total + produto.value * produto.amount, 0);
    };

    //remover
    const handleRemoverCarrinho = (produto) => {
        removerCarrinho(produto);
      };

    return (
        <CarrinhoContainer>
            <CarrinhoTitle>Seu Carrinho</CarrinhoTitle>
            {cart.map((produto) => (
                <ItemContainer key={produto.id}>
                    <div>
                     <Images src={produto.imageUrl} alt={produto.name} />
                    </div>
                    <div>
                        <ItemName>{produto.name}</ItemName> - <ItemAmount>{produto.amount}x</ItemAmount>
                    </div>
                    <div>R${produto.value.toFixed(2)}</div>
                    <div>                    
                    <ButtonCar onClick={() => handleRemoverCarrinho(produto)}> <strong>X</strong> </ButtonCar>
                    </div>
                </ItemContainer>
            ))}
            <TotalContainer>
                <TotalLabel>Total:</TotalLabel> <TotalValue>R${getTotal().toFixed(2)}</TotalValue>
            </TotalContainer>
        </CarrinhoContainer>
    );
};

export default Carrinho;
