import styled from "styled-components";

export const Modal = styled.section`
    display: flex;
    justify-content: center;
    top: 20px;
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
    height: 250px;
    width: 350px;
    border: 0;
    border-radius: 1vh;
    background-color: #eeeeee;
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
    background-color: red;
    cursor: pointer;
`;

export const InputContainer = styled.div`
    height: 50px;
`;

export const Input = styled.input`
    height: 40px;
    width: 280px;
    font-size: 20px;
    text-align: center;
`;

export const Paragraph = styled.p`
    font-size: 16px;
    color: red;
`;

export const ButtonContainer = styled.div``;

export const SubmitButton = styled.button`
    height: 40px;
    width: 150px;
    font-size: 16px;
    cursor: pointer;
`;