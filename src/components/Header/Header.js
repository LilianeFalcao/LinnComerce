import React from 'react';
import styled from 'styled-components';

const Container = styled.header`
    display: flex;
    gap: 16px;
    padding: 20px;
    border: 1px solid #000;
`

const InputStyles = styled.input`
    width: 100%;
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 10px;
`
const Selec = styled.select`
    width: 100%;
    background-color: #ccc;
    border: 1px solid #ccc;
    border-radius: 5px;
`
const Header = (props) => {    

    const AfilterNome = (e) =>{
        props.setFilterNome(e.target.value)
        console.log(props.filterNome)
    }
    
    const handleIdSearch = (e) =>{
        props.setIdFilter(e.target.value)
    }
    const handleMinSearch = (e) =>{
        props.setValorMin(e.target.value)
    }
    const handleMaxSearch = (e) =>{
        props.setValorMax(e.target.value)
    }
    return(
        <Container>
            <InputStyles
                type='text'
                value={props.filterNome}
                onChange={AfilterNome}
                placeholder='pesquisar por nome'
            />
            <InputStyles
                type='number'
                value={props.idFilter}
                onChange={handleIdSearch}
                placeholder='pesquisar por id'
            />
            <InputStyles
                type='number'
                value={props.valorMin}
                onChange={handleMinSearch}
                placeholder='valor Minimo'
            />
             <InputStyles
                type='number'
                value={props.valorMax}
                onChange={handleMaxSearch}
                placeholder='valor Maximo'
            />
            <Selec>
                <option value="">Ordenar</option>
                <option value={props.ordenaInput}>Crescente</option>
                <option value={props.ordenaInput}>Decrescente</option>
            </Selec>
            <button>Carrinho</button>
        </Container>
    );
}

export default Header