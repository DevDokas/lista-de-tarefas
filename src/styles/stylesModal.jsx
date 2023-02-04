import styled from "styled-components";

export const Modal = styled.section`
    display: flex;
    justify-content: center;
    top: 0px;
    position: absolute;
    height: 844px;
    width: 390px;
    background-color: rgba(0, 0, 0, 0.5);
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    margin-top: 250px;
    height: 400px;
    width: 350px;
    border: 0;
    border-radius: 1vh;
    background-color: #d4d4d4;
`;

export const CloseButton = styled.button`
    display: flex;
    justify-content: center;
    height: 35px;
    width: 35px;
    margin-top: -3%;
    margin-left: 87%;
    border: 0;
    border-radius: 50%;
    background-color: transparent;
    cursor: pointer;
`;

export const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 225px;
    padding: 0 31px 0 31px;
`;

export const Input = styled.input`
    height: 30px;
    width: 280px;
    font-size: 18px;
    text-align: center;
    padding: 0 5px 0 5px;
    border: 0;
    border-radius: 10px;
    background-color: #424242;
    font-family: 'Roboto', sans-serif;
`;

export const InputDetails = styled.textarea`
    height: 160px;
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

export const Paragraph = styled.p`
    margin-top: 3%;
    font-size: 16px;
    color: red;
`;

export const ButtonContainer = styled.div``;

export const SubmitButton = styled.button`
    height: 40px;
    width: 150px;
    font-size: 16px;
    cursor: pointer;
    background-color: grey;
    border: 0;
`;

export const AlertContainer = styled.div`
    height: 35px;

`;