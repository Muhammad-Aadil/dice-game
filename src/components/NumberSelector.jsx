import styled from 'styled-components'

const NumberSelector = ({seterror, error, selectedNumber, setSelectedNumber}) => {
  const arrayNum = [1, 2, 3, 4, 5, 6]


  const numberSelectorHandler = (value) => {
    setSelectedNumber(value)
    seterror("")
  }

  return (
    <>
      <NumberSelectorContainer>
        <p className='error'>{error}</p>
        <div className="flex">
          {arrayNum.map((value, i) => (
            <Box
              key={i}
              isSelected={value === selectedNumber}
              onClick={() => numberSelectorHandler(value)}
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
  .error {
    color: red;
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
