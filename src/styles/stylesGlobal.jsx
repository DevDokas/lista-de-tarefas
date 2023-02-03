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
    border-radius: 3vh;
    background-color: grey;
`;

export const Header = styled.header`
    height: 100px;
    background-color: green;
    border: 0;
    border-radius: 3vh 3vh 0 0;
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
    cursor: pointer;
`;

export const ListContainer = styled.ul`
    list-style: none;
`;

export const ItemList = styled.div`
    display: flex;
    justify-content: space-around;
    height: auto;
    width: 320px;
    border-bottom: 1px solid white;
    background-color: rgba(0, 0, 0, 0.15);
`;

export const ItemInput = styled.input``;

export const ItemLi= styled.li``;

export const ItemButtonContainer = styled.div``;