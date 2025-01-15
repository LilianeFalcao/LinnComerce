import styled from "styled-components";

export const Container = styled.header`
    display: flex;
    flex-direction: row;
    gap: 20px; 
    justify-content: center;
    align-items: center; 
    padding: 5px;
    border: 1px solid #000;
    background-color: #784821;

    @media (max-width: 768px) {
        flex-direction: column;
        align-items: flex-start; 
    }
`
export const InputStyles = styled.input`
    width: 600px;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 20px;
    flex-wrap: wrap;

    @media (max-width: 768px) {
        width: calc(100% - 20px); 
    }
`
export const HS = styled.h1`
    width: 100%;
    color: white;
`
export const Logos = styled.img`
    width: auto; 
    height: 120px; 
    max-width: 100px; 
    object-fit: contain; 
    align-self: center;
`