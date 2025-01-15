import React , {useState} from 'react';
import CardProd from '../../components/Card/cardProduto';
import Header from '../../components/Header/Header';
import produtos from '../../data/produtos.json'
import Footer from '../../components/Footer/FooterC';
import Carrinho from '../../components/Carrinho/CarTela';
import { InputStyles, Selec, Ladinho, Sidebar, GlobalStyle, CardsContainer } from './styles';


const Home = () => {
    
    const [idFilter, setIdFilter] = useState("");
    const [valorMin, setValorMin] = useState(0);
    const [valorMax, setValorMax] = useState(Infinity);
    const [filterNome, setFilterNome] = useState("");
    const [sortBy, setSortBy] = useState("");
    const [cart, setCart] = useState([]);

    const adicionarCarrinho = (produto) => {
        const newItem = cart.find((item) => item.id === produto.id);
        if (newItem === undefined) {
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

    //filtros

    const handleIdSearch = (e) =>{
        setIdFilter(e.target.value)
    }
    const handleMinSearch = (e) =>{
        setValorMin(e.target.value)
    }
    const handleMaxSearch = (e) =>{
        setValorMax(e.target.value)
    }
    
    const handleSortChange = (e) => {
        setSortBy(e.target.value);
    };
    return (
    <main>
        <GlobalStyle />
        <Header 
            idFilter={idFilter}
            setIdFilter={setIdFilter}
            filterNome = {filterNome}
            setFilterNome ={setFilterNome}
            valorMin = {valorMin}
            setValorMin ={setValorMin}
            valorMax = {valorMax}
            setValorMax ={setValorMax}
            sortBy = {sortBy}
            setSortBy = {setSortBy}
            cart = {cart}
            setCart = {setCart}
            removerCarrinho = {removerCarrinho}
            adicionarCarrinho = {adicionarCarrinho}
        />
        <Ladinho>
            <Sidebar>
                <InputStyles
                    type='number'
                    value={idFilter}
                    onChange={handleIdSearch}
                    placeholder='pesquisar por id'
                />
                <InputStyles
                    type='number'
                    value={valorMin}
                    onChange={handleMinSearch}
                    placeholder='valor Minimo'
                />
                <InputStyles
                    type='number'
                    value={valorMax}
                    onChange={handleMaxSearch}
                    placeholder='valor Maximo'
                />
                <Selec value={sortBy} onChange={handleSortChange}>
                    <option value="vazio">Ordenar</option>
                    <option value="crescente">Crescente</option>
                    <option value="decrescente">Decrescente</option>
                </Selec>
            </Sidebar>
            <CardsContainer>
                {produtos
                .sort((a , b) =>{
                if (sortBy === 'decrescente') {
                    return a.value > b.value ? 1 : -1;
                } else if (sortBy === 'crescente') {
                    return a.value < b.value ? 1 : -1;
                }
                return 0;
                })
                .filter((produto) =>{
                return((produto.value >= valorMin || valorMin === "")  && (produto.value <= valorMax || valorMax === ""));
                })
                .filter((produto) =>{
                return idFilter ? produto.id.includes(idFilter) : produto
                })
                .filter((produto) =>{
                return produto.name.toLowerCase().includes(filterNome.toLowerCase())
                })
                .map((produto) => (
                <CardProd 
                    key={produto.id} 
                    produtos={produto}
                    adicionarCarrinho={adicionarCarrinho}
                    removerCarrinho = {removerCarrinho}
                    />
                ))}
            </CardsContainer>
        </Ladinho>
        <Carrinho 
            cart={cart}
            setCart={setCart}
            removerCarrinho = {removerCarrinho} />
        <Footer/>

        </main>
    )
}

export default Home