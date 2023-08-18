import { useState } from "react"
import StartGame from "./components/StartGame"
import PlayGame from "./components/PlayGame"

function App() {
  let [isGameStarted, setIsGameStarted] =  useState(true)

  const toggleGamePlay = () => {
    setIsGameStarted((prev) => !prev )
  }
  return (
    <>
    {
      isGameStarted ? <PlayGame />  : <StartGame toggle={toggleGamePlay}/>
    }
    </>
  )
}

export default App
