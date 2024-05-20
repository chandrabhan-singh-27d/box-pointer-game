import { useEffect, useState } from "react"
import GameBox from "./components/GameBox"
import ReactionBox from "./components/ReactionBox"
import TopBar from "./components/TopBar"
import { GameContextProvider, useGameContext } from "./context/useGameContext"

function App() {
  return (
      <GameContextProvider>
        <TopBar />
        <GameBox />
        <ReactionBox />
      </GameContextProvider>
  )
}

export default App
