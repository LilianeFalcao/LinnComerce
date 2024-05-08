import styled from "styled-components";

export const Container = styled.header`
    display: flex;
    flex-direction: row;
    gap: 16px;
    padding: 20px;
    border: 1px solid #000;
    background-color: #213253;

    @media (max-width: 768px) {
        flex-direction: column;
    }
`
export const InputStyles = styled.input`
    width: 100%;
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 10px;
    flex-wrap: wrap;

    @media (max-width: 768px) {
        width: calc(100% - 20px); /* Ajuste de margem para melhor visualização */
    }
`
export const HS = styled.h1`
    width: 100%;
    color: white;
`
export const Logos = styled.img`
    width: 50px;
    heigth: 20px;
    color: white;
    filter: invert(1);
`
export const Nome = styled.h1`
    font-size: 25px;
    color: white;
`
export const Selec = styled.select`
    width: 100%;
    background-color: #ccc;
    border: 1px solid #ccc;
    border-radius: 5px;

    @media (max-width: 768px) {
        width: calc(100% - 20px); /* Ajuste de margem para melhor visualização */
    }
`