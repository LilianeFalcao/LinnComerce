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
export const HS = styled.h1`
    display: flex;
    font-size: 20px;
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
 export const InfoContainer = styled.div`
    display: flex;
    justify-content: center;
    gap: 15px;
    font-size: 20px;
 `
 export const Infos = styled.div`
    display: flex;
    justify-content: center;
    gap: 15px;
    font-size: 18px;
`;

export const Alink = styled.a`
    color: white;
    margin-top: 20px;
    text-decoration: none;
    transition: color 0.3s ease;

    &:hover{
        color: #101d1d;
    }
`