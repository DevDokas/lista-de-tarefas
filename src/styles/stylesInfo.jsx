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
    margin-top: -3%;
    margin-left: 87%;
`;

export const TitleSpan = styled.span`
    height: 30px;
    width: 280px;
    font-size: 18px;
    text-align: center;
    padding: 0 5px 0 5px;
    border: 0;
    border-radius: 10px;
    background-color: #424242;
    font-family: 'Roboto', sans-serif;
    margin-left: 50%;
    transform: translate(-50%, 0);
`;

export const DetailsSpan = styled.span`
    height: 250px;
    width: 280px;
    font-size: 18px;
    text-align: center;
    resize: none;
    padding: 0 5px 0 5px;
    border: 0;
    border-radius: 10px;
    font-family: 'Roboto', sans-serif;
    overflow-y: scroll;
    background-color: #424242;
    margin-left: 50%;
    transform: translate(-50%, 0);


::-webkit-scrollbar {
    width: 0px;
}

::-webkit-scrollbar-track {
    background-color: #424242;
}

/* Handle */
::-webkit-scrollbar-thumb {
    max-height: 15px;
    border: 0;
    border-radius: 15px;
    background-color: #424242;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
    max-height: 15px;
    border: 0;
    border-radius: 15px;
    background-color: #424242;
}
`;