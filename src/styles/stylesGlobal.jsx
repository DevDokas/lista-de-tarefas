import styled from "styled-components";

export const Container = styled.div`
    height: 100vh;
    width: 100vw;
    display: flex;  
    justify-content: center;
    background-color: black;
`;

export const Display = styled.section`
    position: relative;
    display: flex;
    flex-direction: column;
    margin-top: 20px;
    height: 844px;
    width: 390px;
    border: 0;
    border-radius: 3vh;
    background-color: grey;
    overflow: hidden;
`;

export const Header = styled.header`
    height: 100px;
    background-color: green;
    border: 0;
    border-radius: 3vh 3vh 0 0;
`;

export const Title = styled.h1`
    margin-top: 55px;
    font-size: 45px;
    font-weight: 700;
    font-family: 'Dancing Script', cursive;
`;

export const Body = styled.section`
    overflow-y: scroll;
    overflow-x: hidden;
    padding-bottom: 35px;
`;

export const SpanShowMore = styled.span`

`;

export const ContainerShowMore = styled.div`
    position: absolute;
    top: 61.9%;
    left: 70%;
    height: 270px;
    width: 90px;
    display: flex;
    flex-direction: column-reverse;
    justify-content: space-between;
`;

export const ButtonShowMore = styled.button`
    height: 75px;
    width: 75px;
    border: 0;
    border-radius: 50%;
    padding: 18px;
    background-color: green;
    cursor: pointer;
    position: absolute;
    top: 85%;
    left: 70%;
    font-size: 28px;
    font-weight: 700;
    font-family: 'Roboto', sans-serif;
`;

export const ButtonShowLess = styled.button`
    height: 75px;
    width: 75px;
    border: 0;
    border-radius: 50%;
    padding: 18px;
    background-color: green;
    cursor: pointer;
    font-size: 28px;
    font-weight: 700;
    font-family: 'Roboto', sans-serif;
`;

export const AddButton = styled.button`
    height: 75px;
    width: 75px;
    border: 0;
    border-radius: 50%;
    padding: 18px;
    background-color: green;
    cursor: pointer;
`;

export const TrashButton = styled.button`
    display: flex;
    justify-content: center;
    height: 75px;
    width: 75px;
    border: 0;
    border-radius: 50%;
    padding: 12px 0 5px 0;
    background-color: green;
    cursor: pointer;
`;

export const ListContainer = styled.ul`
    display: flex;
    flex-direction: column;
    justify-content: center;
    list-style: none;
    margin-top: 50px;
    margin-left: -5px;
    width: 390px;
`;

export const ItemList = styled.div`
    height: 50px;
    width: 320px;
    border-bottom: 1px solid white;
    background-color: rgba(0, 0, 0, 0.15);
`;

export const ItemInput = styled.input``;

export const ItemLi= styled.li`
    display: flex;
    justify-content: space-around;
    height: 30px;
    font-family: 'Roboto', sans-serif;
`;

export const CheckboxContainer = styled.span`
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 50px;
    cursor: pointer;
`; 

export const TitleContainer = styled.span`
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 50px;
    width: 275px;
    font-size: 20px;
    cursor: pointer;
`;