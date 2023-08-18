import styled from 'styled-components'
import { useState } from 'react'

const DiceNumber = ({randomNumber, setRandomNumber}) => {

  const getRndInteger = (min, max) => {
    return Math.floor(Math.random() * (max - min)) + min
  }

  const change_image = () => {
    setRandomNumber(getRndInteger(1, 7))
  }

  return (
    <>
      <Container>
        <img
          onClick={change_image}
          src={`/images/dice_${randomNumber}.png`}
          alt="dice-image"
        />
        <p>Click the Image</p>
      </Container>
    </>
  )
}

export default DiceNumber

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  cursor: pointer;
`
