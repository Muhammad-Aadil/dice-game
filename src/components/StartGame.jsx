import styled from 'styled-components'

const StartGame = () => {
  return (
    <Container>
      <div>
        <img src="/images/dices.png" alt="Dice Image" />
      </div>
      <div className="content">
        <h1>Dice Game</h1>
        <Button> Play Now</Button>
      </div>
    </Container>
  )
}

export default StartGame

const Container = styled.div`
  max-width: 1180px;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;


  .content {
    h1 {
      font-size: 96px;
      white-space: nowrap;
    }
  }
`

const Button = styled.button`
  background-color: black;
  color: white;
  font-size: 20px;
  border: 2px solid black;
  padding: 10px 18px;
  min-width: 200px;
  border-radius: 5px;
  transition: 0.4s backgroud ease-in;

  &:hover {
    background-color: white;
    color: black;
    border: 2px solid black;
    transition: 0.3s background ease-in;
  }



`
