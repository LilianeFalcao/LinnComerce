import React , {useEffect} from "react";
import { CarrinhoContainer,Images, ButtonCar, CarrinhoTitle, ItemContainer, ItemName, ItemAmount, TotalContainer, TotalLabel, TotalValue } from './styles';

const Carrinho = ({ cart, setCart, removerCarrinho }) => {
    const getTotal = () => {
        return cart.reduce((total, produto) => total + produto.value * produto.amount, 0);
    };

    const handleRemoverCarrinho = (produto) => {
        removerCarrinho(produto);
    };

    useEffect(() => {
        if(cart.length > 0){
            localStorage.setItem('carrinho', JSON.stringify(cart));
        }
    }, [cart]);

    useEffect(() => {
        const carrinhoSalvo = localStorage.getItem('carrinho');
        if (carrinhoSalvo) {
            const carrinho = JSON.parse(carrinhoSalvo);
            setCart(carrinho);
        }
    }, [setCart]);

    return (
        <CarrinhoContainer>
            <CarrinhoTitle>Carrinho de Compras</CarrinhoTitle>
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
