import React from "react";
import {Container, HS, InfoContainer, Infos, Alink} from "./styles";
export default function Footer(){
    return(
       <>
       <Container>
            <HS> @2024 linn yohan</HS>
            <InfoContainer>
            Contatos: 
                <Infos>
                <Alink href="https://www.instagram.com/glacial_linn/" target="_blank" rel="noopener noreferrer">Insta</Alink> 
                <Alink href="https://web.whatsapp.com/" target="_blank" rel="noopener noreferrer">whats</Alink>
                <Alink href="https://x.com/YohanHawks" target="_blank" rel="noopener noreferrer">X / twitter</Alink>
                <Alink href="https://www.linkedin.com/in/lilianefalcao" target="_blank" rel="noopener noreferrer">linkedin</Alink>
                </Infos>
            </InfoContainer>
       </Container>
       </>
    );
}