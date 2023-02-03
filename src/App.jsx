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
  ItemButtonContainer,
  ItemList,
  ItemInput,
  ItemLi,
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
  const LocalStore = () => {
    const StoredLocal = localStorage.getItem("List");
    const RenderValue = JSON.parse(StoredLocal);
    return RenderValue || [];
  }

  const [showAlert, setShowAlert] = useState(false)
  const [showElement, setShowElement] = useState(false);
  const [confirmDelete, setConfirmDelete] = useState(true)
  const [task, setTask] = useState("")
  const [list, setList] = useState(LocalStore)
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
            <ItemList key={task.id}>
              <ItemInput type="checkbox" />
              <ItemLi >{task.id}{" "}{task.text}</ItemLi>
              <ItemButtonContainer>
                <FaEdit />
                {confirmDelete ? <FaTrashAlt onClick={() => setConfirmDelete(false)}/> : <FaExclamation/>}
              </ItemButtonContainer>
            </ItemList>
            ))}
          </ListContainer>
        </Body>
      </Display>
    </Container>
  )
}

export default App

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