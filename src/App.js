import React , {useState} from 'react';
import CardProd from './components/Card/cardProduto';
import Header from './components/Header/Header';
import produtos from './data/produtos.json'
import styled, {createGlobalStyle} from 'styled-components';

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
  const [filterNome, setFilterNome] = useState('');
  const [telaAtual, setTelaAtual] = useState("CardProd")
  const mudarTela = (novaTela) => {
    setTelaAtual(novaTela)
  }        

  const renderizarTela = () =>{
    if(telaAtual !== 'Carrinho'){
      return (
        <>
          <Header 
            idFilter={idFilter}
            setIdFilter={setIdFilter}
            filterNome = {filterNome}
            setFilterNome ={setFilterNome}
            mudarTela = {mudarTela}
          />
          <CardsContainer>
            {produtos
            .filter((produto) =>{
              return idFilter ? produto.id.includes(idFilter) : produto
            })
            .filter((produto) =>{
              return produto.name.toLowerCase().includes(filterNome.toLowerCase())
            })
            .map((produto) => (
              <CardProd 
                key={produto.id} produtos={produto}
                 />
            ))}
          </CardsContainer>
        </>
      );
    }
  }

  return(
    <main>
      <GlobalStyle />
      {renderizarTela()}
    </main>
  );
}

export default App;
