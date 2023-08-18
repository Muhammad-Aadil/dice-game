import React from 'react'
import styled from 'styled-components'

const GameRules = () => {
  return (
    <RuleContainer>
      <h2>How to play this game</h2>
      <div className="text">
        <p>Select any Number</p>
        <p>Click on the dice image</p>
        <p>
          If the selected number is equal to dice number you will get the same
          point as dice
        </p>
        <p>If you get wrong guess then 2 points will be deducted.</p>
      </div>
    </RuleContainer>
  )
}

export default GameRules

const RuleContainer = styled.div`
  background-color: #fbf1f1;
  max-width: 800px;
  margin: 0 auto;
  margin-top: 40px;
  border-radius: 10px;
  padding: 20px;

  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 20px h2 {
    font-size: 20px;
  }
  .text {
    margin-top: 24px;
  }
`
