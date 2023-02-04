import React, { useState, useEffect } from 'react'
import {FaPlus, FaRegTimesCircle, FaTrashAlt, FaExclamation, FaRegCheckSquare, FaRegSquare} from 'react-icons/fa'

// Components
import {
  Container,
  CheckboxContainer,
  TitleContainer, 
  Display, 
  Header, 
  Title, 
  Body, 
  AddButton,
  ListContainer,
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
  const [obsTask, setObsTask] = useState("")
  const [dateTask, setDateTask] = useState("")
  const [timeTask, setTimeTask] = useState("")
  const [list, setList] = useState(LocalStore)
  const [checked, setChecked] = useState(false)

  const ShowElement = () => setShowElement(true);
  const HideElement = () => {
    setShowElement(false)
    setShowAlert(false)
  };

  useEffect(() => {localStorage.setItem("List", JSON.stringify(list))}, [list])

  function handleChangeInputTask(e) {
    const inputTask = e.target.value
    setTask(inputTask)
  }

  function handleChangeInputObsTask(e) {
    const inputObsTask = e.target.value
    setObsTask(inputObsTask)
  }

  function handleItemToList(e) {
    e.preventDefault();

    if (!task) {
      return setShowAlert(true);
    }
    if (task !== "") {
      setList([...list, {id: list.length + 1, title: task.trim(), details: obsTask.trim(), done: false}])
    }

    setTask("")
    setShowAlert(false)
    HideElement()
  }

  function CheckBox(task) {
    const thisTask = task.id - 1
    list[thisTask].done = !task.done
    setList(list)
    localStorage.setItem("List", JSON.stringify(list))  
    location.reload()
  }

  
  return (
    <Container>
      <Display>
        <Header>
          <Title>Tarefas</Title>
        </Header>
        <Body>
          <AddButton onClick={ShowElement}> <FaPlus size={30}/> </AddButton>
          {confirmDelete ? <FaTrashAlt size={50} onClick={() => setConfirmDelete(false)}/> : <FaExclamation size={50} onClick={() => {
            localStorage.clear()
            location.reload()
          }}/>}
          {showElement ? 
                    <Modal>
                      <Form onSubmit={handleItemToList}>
                        <CloseButton onClick={HideElement}> <FaRegTimesCircle size={33}/> </CloseButton>
                        <InputContainer>
                          <Input type="text" placeholder="Digite a sua tarefa..." onChange={handleChangeInputTask} value={task}/>
                          <input type="text" placeholder="Digite a descrição da tarefa... (Opcional)" onChange={handleChangeInputObsTask} value={obsTask}/>
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
              <ItemLi>
                <CheckboxContainer>
                  {task.done ? <FaRegCheckSquare size={20}  onClick={() => CheckBox(task)}/> : <FaRegSquare size={20}  onClick={() => CheckBox(task)}/>}
                </CheckboxContainer>
                {" "}
                <TitleContainer>{task.title}</TitleContainer>
              </ItemLi>
            </ItemList>
            ))}
          </ListContainer>
        </Body>
      </Display>
    </Container>
  )
}

export default App