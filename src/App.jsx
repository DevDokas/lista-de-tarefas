import React, { useState } from 'react'
import {FaPlus, FaRegTimesCircle} from 'react-icons/fa'

// Components
import {
  Container, 
  Display, 
  Header, 
  Title, 
  Body, 
  AddButton,
} from './styles/stylesGlobal'
import {
  Modal,
  Form,
  ButtonContainer,
  CloseButton,
  SubmitButton,
  InputContainer,
  Input,
  Paragraph,
} from './styles/stylesModal'

function App() {
  const [showAlert, setShowAlert] = useState(false)
  const [showElement, setShowElement] = useState(false);
  const [task, setTask] = useState("")
  const [list, setList] = useState([])

  const ShowElement = () => setShowElement(true);
  const HideElement = () => {
    setShowElement(false)
    setShowAlert(false)
  };

  function handleChangeInput(e) {
    const inputTask = e.target.value
    setTask(inputTask)
  }

  function handleItemToList(e) {
    e.preventDefault();

    if (!task) {
      return setShowAlert(true);
    }

    setList([...list, task])

    setTask("")
    setShowAlert(false)
    HideElement()
  }
  
  return (
    <Container>
      <Display>
        <Header>
          <Title>Tarefas</Title>
        </Header>
        <Body>
          
          <AddButton onClick={ShowElement}> <FaPlus size={30}/> </AddButton>
          
          {showElement ? 
                    <Modal>
                      <Form onSubmit={handleItemToList}>
                        <CloseButton onClick={HideElement}> <FaRegTimesCircle size={33}/> </CloseButton>
                        <InputContainer>
                          <Input type="text" placeholder="Digite a sua tarefa..." onChange={handleChangeInput} value={task}/>
                          {showAlert ? <Paragraph>Digite a tarefa antes de adiciona-la</Paragraph> : null}
                        </InputContainer>
                        <ButtonContainer>
                          <SubmitButton type="submit"> Enviar </SubmitButton>
                        </ButtonContainer>
                      </Form>
                  </Modal>
          : null}

          <ul>
            {list.map((item, index) => (<li key={index}>{item}</li>))}
          </ul>
        </Body>
      </Display>
    </Container>
  )
}

export default App
