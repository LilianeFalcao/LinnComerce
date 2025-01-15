import React from 'react';
import {Container, InputStyles, Logos} from './styles';
import OwlLogo from './img/OwlLogo.png'

const Header = (props) => {    
    const AfilterNome = (e) =>{
        props.setFilterNome(e.target.value)
    }
    
    return(
        <Container>
            <Logos src={OwlLogo}/> 
            <InputStyles
                    type='text'
                    value={props.filterNome}
                    onChange={AfilterNome}
                    placeholder='Procurando...'
            />
        </Container>
    );
}

export default Header