import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: "Inter", sans-serif;
    }
`
export const CardsContainer = styled.div`
    display: flex;
    flex-wrap: wrap; 
    justify-content: center; 
    gap: 20px; 
    padding: 20px;

    
    max-width: 1200px;
    margin: 0 auto; 

    & > * {
    flex: 1 1 300px; 
    max-width: 300px; 
    }
`
export const Selec = styled.select`
    width: 100%;
    background-color: #ccc;
    border: 1px solid #ccc;
    border-radius: 5px;

    @media (max-width: 768px) {
        width: calc(100% - 20px); 
    }
`
export const InputStyles = styled.input`
    width: 100%;
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 10px; 
    flex-wrap: wrap;

    @media (max-width: 768px) {
        width: calc(100% - 20px); 
    }
`

export const Ladinho = styled.div`
    display: flex;
    flex-direction: row
`

export const Sidebar = styled.aside`
    width: 400px;
    position: sticky;
    top: 0;
    height: 100vh;
    background-color: #f8f8f8;
    padding: 20px;
    box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
    overflow-y: auto;

    & > * {
        margin-bottom: 15px;
    }

    @media (max-width: 768px) {
        position: static;
        width: 100%;
        height: auto;
        box-shadow: none;
    }
    `;

    export const MainContent = styled.div`
    flex-grow: 1;
    padding: 20px;
    `;