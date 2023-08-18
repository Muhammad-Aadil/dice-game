import styled from 'styled-components'

const GameScore = ({currentScore}) => {

  return (
    <Container>
      <h1>{currentScore}</h1>
      <p>Total Score</p>
    </Container>
  )
}

export default GameScore

const Container = styled.div`
display: flex;
flex-direction: column;
align-items: center;
  h1 {
    font-size: 96px;
    font-weight: 500px;
  }
  p {
    font-size: 20px;
  }
`
