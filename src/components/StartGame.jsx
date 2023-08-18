import styled from 'styled-components'
import { Button } from '../Styles/Button'
const StartGame = ({toggle}) => {
  return (
    <Container>
      <div>
        <img src="/images/dices.png" alt="Dice Image" />
      </div>
      <div className="content">
        <h1>Dice Game</h1>
        <Button onClick={toggle}> Play Now</Button>
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
