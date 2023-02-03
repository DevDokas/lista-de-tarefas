import React, { useState, useEffect } from 'react'
import {FaPlus, FaRegTimesCircle, FaEdit, FaTrashAlt, FaExclamation} from 'react-icons/fa'

// Components
import {
  Container, 
  Display, 
  Header, 
  Title, 
  Body, 
  AddButton,
  ListContainer,
  ItemList
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
  const [confirmDelete, setConfirmDelete] = useState(true)
  const [task, setTask] = useState("")
  const [list, setList] = useState([])
  const [itemKey, setItemKey] = useState(0)

  const ShowElement = () => setShowElement(true);
  const HideElement = () => {
    setShowElement(false)
    setShowAlert(false)
  };


  useEffect(() => {localStorage.setItem("List", JSON.stringify(list))}, [list])

  function handleChangeInput(e) {
    const inputTask = e.target.value
    setTask(inputTask)
  }

  function handleItemToList(e) {
    e.preventDefault();

    if (!task) {
      return setShowAlert(true);
    }
    if (task !== "") {
      setList([...list, {id: list.length + 1, text: task.trim()}])
    }
    /* function KeyGen() {
      setItemKey(itemKey + 1)
      return itemKey
    }

    KeyGen() */

    /* setList([...list, task])
    const storageList = Object.assign({}, [...list])
    const saveInLocal = () => )
    saveInLocal()
    console.log(storageList) */

    
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

          <ListContainer>
            {list.map((task) => (
            <div>
              <input type="checkbox" />
              <ItemList key={task.id}>{task.id}{" "}{task.text}</ItemList>
              <FaEdit />
              {confirmDelete ? <FaTrashAlt onClick={() => setConfirmDelete(false)}/> : <FaExclamation/>}
            </div>
            ))}
          </ListContainer>
        </Body>
      </Display>
    </Container>
  )
}

export default App
