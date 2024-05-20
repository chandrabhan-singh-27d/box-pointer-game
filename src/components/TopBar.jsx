import { useGameContext } from "../context/useGameContext";
import "./ComponentStyles.css"

const TopBar = () => {
    const {
        timer,
        setTimer,
        setGameStart,
        setReactionTime,
        setReactionTimeList
    } = useGameContext();

    const handleGameStart = () => {
        setGameStart(true);
    }

    const handleGamePause = () => {
        setGameStart(false);
        setTimer(0);
    }

    const handleGameReset = () => {
        setGameStart(false);
        setTimer(0);
        setReactionTime(0);
        setReactionTimeList([]);
    }


    return (
        <div id="top-bar">
            <button onClick={handleGameStart}>Start</button>
            <button onClick={handleGamePause}>Pause</button>
            <button onClick={handleGameReset}>Reset</button>
            <input type="number" value={timer} onChange={(e) => setTimer(e.target.value)} />
        </div>
    )
}

export default TopBar