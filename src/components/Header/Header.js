import React from 'react';
import {Container,Nome, InputStyles, Logos, Selec} from './styles';

const Header = (props) => {    
    const AfilterNome = (e) =>{
        props.setFilterNome(e.target.value)
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
    
    const handleSortChange = (e) => {
        props.setSortBy(e.target.value);
    };

    return(
        <Container>
            <Logos src='https://cdn-icons-png.flaticon.com/512/1797/1797131.png'/> 
            <Nome>Owl Mangas</Nome>
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
            <Selec value={props.sortBy} onChange={handleSortChange}>
                <option value="vazio">Ordenar</option>
                <option value="crescente">Crescente</option>
                <option value="decrescente">Decrescente</option>
            </Selec>
        </Container>
    );
}

export default Header