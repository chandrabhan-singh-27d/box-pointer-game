import { createContext, useContext, useState } from "react";

const GameContext = createContext();

const GameContextProvider = ({ children }) => {
    const [timer, setTimer] = useState(0);
    const [gameStart, setGameStart] = useState(false);
    const [reactionTime, setReactionTime] = useState(0);
    const [reactionTimeList, setReactionTimeList] = useState([]);

    return (
        <GameContext.Provider value={{
            timer,
            setTimer,
            gameStart,
            setGameStart,
            reactionTime,
            setReactionTime,
            reactionTimeList,
            setReactionTimeList
        }}>
            {children}
        </GameContext.Provider>
    )
};

const useGameContext = () => useContext(GameContext);

export {
    useGameContext,
    GameContextProvider
}