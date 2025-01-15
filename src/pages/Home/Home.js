import React, { useState } from 'react';
import CardProd from '../../components/Card/cardProduto';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/FooterC';
import Carrinho from '../../components/Carrinho/CarTela';
import { InputStyles, Selec, Ladinho, Sidebar, GlobalStyle, CardsContainer } from './styles';

// Hook para buscar os produtos da API
import { useFetch } from '../../hooks/useFetch';
import { UrlProdutos } from '../../constants/baseUrls';

const Home = () => {
    const { dados: produtos, loading, error } = useFetch(UrlProdutos);

    const [idFilter, setIdFilter] = useState('');
    const [valorMin, setValorMin] = useState('');
    const [valorMax, setValorMax] = useState('');
    const [filterNome, setFilterNome] = useState('');
    const [sortBy, setSortBy] = useState('');
    const [cart, setCart] = useState([]);

    const adicionarCarrinho = (produto) => {
        const newItem = cart.find((item) => item.id === produto.id);
        if (!newItem) {
            setCart([...cart, { ...produto, amount: 1 }]);
        } else {
            const newCart = cart.map((item) =>
                item.id === produto.id ? { ...newItem, amount: newItem.amount + 1 } : item
            );
            setCart(newCart);
        }
    };

    const removerCarrinho = (produto) => {
        const deleteProduct = cart.find((item) => item.id === produto.id);
        if (deleteProduct.amount > 1) {
            const newCart = cart.map((item) =>
                item.id === produto.id ? { ...deleteProduct, amount: deleteProduct.amount - 1 } : item
            );
            setCart(newCart);
        } else {
            const newCart = cart.filter((item) => item.id !== produto.id);
            setCart(newCart);
        }
    };

    // Aplicar filtros e ordenação
    const produtosFiltrados =
        produtos &&
        produtos
            .filter((produto) => (valorMin ? produto.value >= valorMin : true))
            .filter((produto) => (valorMax ? produto.value <= valorMax : true))
            .filter((produto) => (idFilter ? produto.id.toString().includes(idFilter) : true))
            .filter((produto) => produto.name.toLowerCase().includes(filterNome.toLowerCase()))
            .sort((a, b) => {
                if (sortBy === 'crescente') {
                    return a.value - b.value;
                }
                if (sortBy === 'decrescente') {
                    return b.value - a.value;
                }
                return 0;
            });

    return (
        <main>
            <GlobalStyle />
            <Header
                idFilter={idFilter}
                setIdFilter={setIdFilter}
                filterNome={filterNome}
                setFilterNome={setFilterNome}
                valorMin={valorMin}
                setValorMin={setValorMin}
                valorMax={valorMax}
                setValorMax={setValorMax}
                sortBy={sortBy}
                setSortBy={setSortBy}
                cart={cart}
                setCart={setCart}
                removerCarrinho={removerCarrinho}
                adicionarCarrinho={adicionarCarrinho}
            />
            <Ladinho>
                <Sidebar>
                    <InputStyles
                        type="number"
                        value={idFilter}
                        onChange={(e) => setIdFilter(e.target.value)}
                        placeholder="Pesquisar por ID"
                    />
                    <InputStyles
                        type="number"
                        value={valorMin}
                        onChange={(e) => setValorMin(e.target.value)}
                        placeholder="Valor mínimo"
                    />
                    <InputStyles
                        type="number"
                        value={valorMax}
                        onChange={(e) => setValorMax(e.target.value)}
                        placeholder="Valor máximo"
                    />
                    <Selec value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
                        <option value="">Ordenar</option>
                        <option value="crescente">Crescente</option>
                        <option value="decrescente">Decrescente</option>
                    </Selec>
                </Sidebar>
                <CardsContainer>
                    {loading && <p style={{ color: 'black' }}>Carregando dados...</p>}
                    {error && <p>{error}</p>}
                    {produtosFiltrados &&
                        produtosFiltrados.map((produto) => (
                            <CardProd
                                key={produto.id}
                                produto={produto}
                                adicionarCarrinho={adicionarCarrinho}
                                removerCarrinho={removerCarrinho}
                            />
                        ))}
                </CardsContainer>
            </Ladinho>
            <Carrinho cart={cart} setCart={setCart} removerCarrinho={removerCarrinho} />
            <Footer />
        </main>
    );
};

export default Home;
