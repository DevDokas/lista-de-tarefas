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
`;

export const ButtonShowLess = styled.button`
    height: 75px;
    width: 75px;
    border: 0;
    border-radius: 50%;
    padding: 18px;
    background-color: green;
    cursor: pointer;
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
    list-style: none;
`;

export const ItemList = styled.div`
    height: auto;
    width: 320px;
    border-bottom: 1px solid white;
    background-color: rgba(0, 0, 0, 0.15);
`;

export const ItemInput = styled.input``;

export const ItemLi= styled.li`
    display: flex;
    justify-content: space-around;
    height: 30px;

`;

export const CheckboxContainer = styled.span`
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 30px;
`; 

export const TitleContainer = styled.span`
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 30px;
`;