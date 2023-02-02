import React, { useState } from 'react'
import {FaPlus} from 'react-icons/fa'

// Components
import {Container, Display, Header, Title, Body, AddButton} from './styles/stylesGlobal'
import {
  Modal,
} from './styles/stylesModal'

function App() {
  const [showElement, setShowElement] = useState(false);
  const [list, setList] = useState("")

  const ShowElement = () => setShowElement(true);
  const HideElement = () => setShowElement(false);

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
                    <form></form>
                    <button onClick={HideElement}> + </button>
                  </Modal>
          : null}

        </Body>
      </Display>
    </Container>
  )
}

export default App
