import styled from 'styled-components'

export const Button = styled.button`
  background-color: black;
  color: white;
  font-size: 20px;
  border: 2px solid black;
  padding: 10px 18px;
  min-width: 200px;
  border-radius: 5px;
  transition: 0.4s backgroud ease-in;
  cursor: pointer;

  &:hover {
    background-color: white;
    color: black;
    border: 2px solid black;
    transition: 0.3s background ease-in;
    cursor: pointer;
  }



`