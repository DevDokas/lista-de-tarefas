import styled from "styled-components";

export const InfoModal = styled.section`
    display: flex;
    justify-content: center;
    position: absolute;
    top: 0;
    height: 200vh;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.5);
`;

export const InfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    margin-top: 200px;
    height: 400px;
    width: 350px;
    border: 0;
    border-radius: 1vh;
    background-color: #d4d4d4;
`;

export const InfoCloseButton = styled.div`
    height: 32px;
    width: fit-content;
    cursor: pointer;
    margin-top: -15%;
    margin-left: 87%;
`;

export const TitleSpan = styled.span`
    background-color: #424242;
    width: 320px;
    margin-left: 50%;
    transform: translate(-50%, 0);
`;

export const DetailsSpan = styled.span`
    background-color: #424242;
    width: 320px;
    margin-left: 50%;
    transform: translate(-50%, 0);
`;