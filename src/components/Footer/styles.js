import styled from "styled-components";


export const Container = styled.div`
    width: 100vw;
    height: 50vh;
    display: flex;
    padding: 70px;
    justify-content: space-around;
    align-items: flex-start;
    flex-direction: row;
    background-color: #213253;
    color: white;
`
export const HS = styled.h3`
    display: flex;
    font-size: 30px;
    flex-direction: row;
    justify-content: flex-start
`   
export const Sobre = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    left: 0;
    margin-top: 20px;
    cursor: pointer;
    gap:16px
` 
export const Suport = styled.div`
    display: flex;
     flex-direction: column;
     justify-content: center;
     align-items: center;
     margin-top: 20px;
     cursor: pointer;
     gap:16px
`    
 export const SobP = styled.p`
    color: white;
    gap: 10px;

 `
 export const Redes = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
    gap: 20px;
 `
 export const SocialButton = styled.a`
    display: flex;
    flex-direction: row;
    padding: 10px 20px;
    background-color: #3b5998; /* Cor do Facebook, por exemplo */
    color: #fff;
    text-decoration: none;
    border-radius: 5px;
    font-weight: bold;
    transition: background-color 0.3s ease;

    &:hover {
    background-color: #2d4373; /* Cor mais escura no hover */
    }
`;