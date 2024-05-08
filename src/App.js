import React , {useState} from 'react';
import CardProd from './components/Card/cardProduto';
import Header from './components/Header/Header';
import produtos from './data/produtos.json'
import styled, {createGlobalStyle} from 'styled-components';
import Footer from './components/Footer/FooterC';
import Carrinho from './components/Carrinho/CarTela';

const GlobalStyle = createGlobalStyle`
*{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: "Inter", sans-serif;
}
`;
const CardsContainer = styled.div`
display: grid;
grid-template-columns: repeat(auto-fill, minmax(440px, 1fr));
justify-items: center;
`;

function App() {
  
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

  return(
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
      <Carrinho 
        cart={cart}
        setCart={setCart}
        removerCarrinho = {removerCarrinho} />
      <Footer/>

    </main>
  );
}

export default App;
