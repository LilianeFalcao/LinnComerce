import React from "react";
import {Container, SocialButton, Sobre, HS, Suport, Redes} from "./styles";

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
                <div>
                    <SocialButton href="https://www.instagram.com/gsmartins216/" target="_blank" > 
                       instagram
                    </SocialButton>
                </div>
            </Redes>
        </Container>
        </>
    );
}