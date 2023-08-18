import { useState } from 'react'
import styled from 'styled-components'

const NumberSelector = ({selectedNumber, setSelectedNumber}) => {
  const arrayNum = [1, 2, 3, 4, 5, 6]

  return (
    <>
      <NumberSelectorContainer>
        <div className="flex">
          {arrayNum.map((value, i) => (
            <Box
              key={i}
              isSelected={value === selectedNumber}
              onClick={() => setSelectedNumber(value)}
            >
              {value}
            </Box>
          ))}
        </div>
        <p>Select Number</p>
      </NumberSelectorContainer>
    </>
  )
}

export default NumberSelector

const NumberSelectorContainer = styled.div`
display: flex;
flex-direction: column;
align-items: end;
  .flex {
    display: flex;
    gap: 20px
  }
`

const Box = styled.div`
  height: 72px;
  width: 72px;
  border: 1px solid black;
  display: grid;
  place-items: center;
  background-color: ${(props) => (props.isSelected ? 'black' : ' white')};
  color: ${(props) => (!props.isSelected ? 'black' : ' white')};
`
