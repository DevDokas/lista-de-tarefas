import styled from "styled-components";

export const Container = styled.div`
    height: 100vh;
    width: 100vw;
    display: flex;  
    justify-content: center;
    background-color: black;
`;

export const Display = styled.section`
    display: flex;
    flex-direction: column;
    margin-top: 20px;
    height: 844px;
    width: 390px;
    border: 0;
    border-radius: 1vh;
    background-color: grey;
`;

export const Header = styled.header`
    height: 100px;
    background-color: green;
    border: 0;
    border-radius: 1vh 1vh 0 0;
`;

export const Title = styled.h1`
    margin-top: 60px;
    font-size: 36px;
`;

export const Body = styled.section`

`;

export const AddButton = styled.button`
    position: absolute;
    bottom: 15%;
    right: 42%;
    height: 75px;
    width: 75px;
    border: 0;
    border-radius: 50%;
    padding: 18px;
    background-color: green;
`;