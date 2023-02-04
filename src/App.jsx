import React, { useState, useEffect } from 'react'
import {FaPlus, FaRegTimesCircle, FaTrashAlt, FaExclamation, FaRegCheckSquare, FaRegSquare} from 'react-icons/fa'

// Components
import {
  Container,
  CheckboxContainer,
  TitleContainer,
  ContainerShowMore,
  SpanShowMore, 
  Display, 
  Header, 
  Title, 
  Body, 
  AddButton,
  ButtonShowMore,
  ButtonShowLess,
  TrashButton,
  ListContainer,
  ItemList,
  ItemInput,
  ItemLi,
} from './styles/stylesGlobal'
import {
  Modal,
  Form,
  ButtonContainer,
  AlertContainer,
  CloseButton,
  SubmitButton,
  InputContainer,
  Input,
  InputDetails,
  Paragraph,
} from './styles/stylesModal'
import {
  InfoModal,
  InfoContainer,
  InfoCloseButton,
  TitleSpan,
  DetailsSpan, 
} from './styles/stylesInfo'


function App() {
  const LocalStore = () => {
    const StoredLocal = localStorage.getItem("List");
    const RenderValue = JSON.parse(StoredLocal);
    return RenderValue || [];
  }

  const [showAlert, setShowAlert] = useState(false)
  const [showElement, setShowElement] = useState(false);
  const [showMore, setShowMore] = useState(false)
  const [showInfo, setInfo] = useState(false)
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
    setTask("")
    setObsTask("")
  };

  const ShowMore = () => setShowMore(true)
  const ShowLess = () => {
    setShowMore(false)
    setConfirmDelete(true)
  }

  function ShowInfo(task) {
    const thisTask = task.id - 1

    list[thisTask].showMore = !task.showMore
    setList(list)
    localStorage.setItem("List", JSON.stringify(list))
    location.reload()  

    //TODO: excluir estes console.logs 
    console.log(list[thisTask].showMore)
    console.log(task)
  }

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
      setList([...list, {id: list.length + 1, title: task.trim(), details: obsTask.trim(), done: false, showMore: false}])
    }

    setTask("")
    setObsTask("")
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
          <SpanShowMore>
            {showMore ? 
            <ContainerShowMore>
              <ButtonShowLess onClick={ShowLess}> . . . </ButtonShowLess>
              <AddButton onClick={ShowElement}> <FaPlus size={30}/> </AddButton>
              {confirmDelete ?
              <TrashButton>
                <FaTrashAlt size={50} onClick={() => setConfirmDelete(false)}/>
              </TrashButton> 
              :
              <TrashButton>
                <FaExclamation size={50} color="#970707" onClick={() => {
                localStorage.clear()
                location.reload()
                }}/>
              </TrashButton>
              }
            </ContainerShowMore>
            : <ButtonShowMore onClick={ShowMore}> . . . </ButtonShowMore>
            }
          </SpanShowMore>
          {showElement ? 
                    <Modal>
                      <Form onSubmit={handleItemToList}>
                        <CloseButton > <FaRegTimesCircle size={35} onClick={HideElement} color="red"/> </CloseButton>
                        <InputContainer>
                          <Input type="text" placeholder="Digite a sua tarefa..." onChange={handleChangeInputTask} value={task}/>
                          <AlertContainer>
                            {showAlert ? <Paragraph>Digite a tarefa antes de adiciona-la</Paragraph> : null}
                          </AlertContainer>
                          <InputDetails type="text" placeholder="Digite a descrição da tarefa... (Opcional)" onChange={handleChangeInputObsTask} value={obsTask}/>
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
              <ItemLi >
                <CheckboxContainer>
                  {task.done ? <FaRegCheckSquare size={20}  onClick={() => CheckBox(task)}/> : <FaRegSquare size={20}  onClick={() => CheckBox(task)}/>}
                </CheckboxContainer>
                {" "}
                <TitleContainer onClick={() => ShowInfo(task)}>{task.title}</TitleContainer>
                {task.showMore ? 
                <InfoModal>
                  <InfoContainer>
                    <InfoCloseButton > <FaRegTimesCircle size={35}onClick={() => ShowInfo(task)} color="red"/> </InfoCloseButton>
                    <TitleSpan>{task.title}</TitleSpan>
                    <DetailsSpan>{task.details}</DetailsSpan>
                  </InfoContainer>
                </InfoModal>
                : null}
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