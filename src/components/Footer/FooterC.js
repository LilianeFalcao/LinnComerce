import React from "react";
import {Container, Sobre, HS, Suport, Redes} from "./styles";

export default function Footer(){
    return(
        <>
            <Container>
            <Sobre>
                <HS>Sobre:</HS>
                <p>Quem somos?</p>
                <p>O que fazemos?</p>
                <p>Como Fazemos?</p>
                <p>Dúvidas</p>
            </Sobre>
            <Suport>
                <HS>Descubra:</HS>
                <p>Suporte</p>
                <p>Problemas?</p>
            </Suport>
            <Redes>
                <HS>Nossas redes sociais: </HS>
            </Redes>
        </Container>
        </>
    );
}