import styled from 'styled-components'
import NumberSelector from './NumberSelector'
import GameScore from './GameScore'
import DiceNumber from './DiceNumber'
import { useState } from 'react'

const PlayGame = () => {
  let [selectedNumber, setSelectedNumber] = useState()
  let [randomNumber, setRandomNumber] = useState(1)
  return (
    <>
      <Container>
        <GameScore></GameScore>
        <div>
          <NumberSelector selectedNumber={selectedNumber} setSelectedNumber={setSelectedNumber}/> 
        </div>
      </Container>
      <ImageContainer>
        <DiceNumber randomNumber={randomNumber} setRandomNumber={setRandomNumber}/>
      </ImageContainer>
    </>
  )
}

export default PlayGame

const Container = styled.div`
  display: flex;
  align-items: center;
  margin: 20px 40px;
  justify-content: space-between;
  padding-top: 50px;
`
const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
