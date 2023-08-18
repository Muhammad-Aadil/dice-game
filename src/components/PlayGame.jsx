import styled from 'styled-components'
import NumberSelector from './NumberSelector'
import GameScore from './GameScore'
import DiceNumber from './DiceNumber'
import { useState } from 'react'

const PlayGame = () => {
  let [currentScore, setCurrentScore] = useState(0)
  let [selectedNumber, setSelectedNumber] = useState()
  let [randomNumber, setRandomNumber] = useState(1)
  const [error, seterror] = useState('')

  const getRndInteger = (min, max) => {
    return Math.floor(Math.random() * (max - min)) + min
  }
  const rolldice = () => {
    if (!selectedNumber) {
      seterror('Please select the nubmer first.')
      return
    }
    setRandomNumber(getRndInteger(1, 7))

    if (selectedNumber === randomNumber) {
      setCurrentScore((prev) => prev + randomNumber)
    } else {
      setCurrentScore((prev) => prev - 2)
    }
    setSelectedNumber()
  }

  return (
    <>
      <Container>
        <GameScore currentScore={currentScore} />
        <div>
          <NumberSelector
            error={error}
            seterror={seterror}
            selectedNumber={selectedNumber}
            setSelectedNumber={setSelectedNumber}
          />
        </div>
      </Container>
      <ImageContainer>
        <DiceNumber randomNumber={randomNumber} rolldice={rolldice} />
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
