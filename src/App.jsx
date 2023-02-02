import React, { useState } from 'react'
import {FaPlus} from 'react-icons/fa'

// Components
import {Container, Display, Header, Title, Body, AddButton} from './styles/stylesGlobal'
import {
  Modal,
} from './styles/stylesModal'

function App() {
  const [showAlert, setShowAlert] = useState(false)
  const [showElement, setShowElement] = useState(false);
  const [task, setTask] = useState("")
  const [list, setList] = useState([])

  const ShowElement = () => setShowElement(true);
  const HideElement = () => setShowElement(false);

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
                      <form onSubmit={handleItemToList}>
                        <button onClick={HideElement}> - </button>
                        <input type="text" placeholder="Digite a sua tarefa..." onChange={handleChangeInput} value={task}/>
                        {showAlert ? <p>Digite a tarefa antes de adiciona-la</p> : null}
                        <button type="submit"> Enviar </button>
                      </form>
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
