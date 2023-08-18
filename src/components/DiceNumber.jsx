import styled from 'styled-components'

const DiceNumber = ({ randomNumber, rolldice }) => {
  return (
    <>
      <Container>
        <img
          onClick={rolldice}
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
