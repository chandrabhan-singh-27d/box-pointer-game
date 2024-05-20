import { useEffect, useState, useRef } from "react"
import { useGameContext } from "../context/useGameContext"
import "./ComponentStyles.css"
const GameBox = () => {
    const {
        timer,
        gameStart,
        setReactionTimeList,
        setReactionTime,
        reactionTime
    } = useGameContext()
    const [position, setPosition] = useState({ top: 20, left: 50 });
    const [dimensions, setDimensions] = useState(null);
    const intervalRef = useRef(null);

    useEffect(() => {
        const container = document.querySelector("#main-box");
        const pointer = document.querySelector("#pointer");

        if (container && pointer) {
            setDimensions({
                containerWidth: container.clientWidth,
                containerHeight: container.clientHeight,
                pointerWidth: pointer?.clientWidth,
                pointerHeight: pointer?.clientHeight
            })
        }
    }, [gameStart])


    const movePointer = (() => {
        if (!dimensions) return;
        const { containerWidth, containerHeight, pointerWidth, pointerHeight } = dimensions;

        const maxX = containerWidth - pointerWidth;
        const maxY = containerHeight - pointerHeight;

        const randomX = Math.floor(Math.random() * maxX);
        const randomY = Math.floor(Math.random() * maxY);

        setPosition({ top: randomY, left: randomX });
    })

    useEffect(() => {
        if (!dimensions) return;
        if (gameStart) {
            intervalRef.current = setInterval(movePointer, timer * 1000)
            return () => clearInterval(intervalRef.current);
        }

    }, [gameStart, timer, dimensions])



    const manualPointerMovement = () => {
        let startTime;

        if (reactionTime === 0) startTime = new Date();
        else startTime = reactionTime;
        
        clearInterval(intervalRef.current);
        movePointer();
        intervalRef.current = setInterval(movePointer, timer * 1000);
        
        const endTime = new Date();
        
        setReactionTime(endTime)
        setReactionTimeList(prevList => {
            return [...prevList, (endTime - startTime) / 1000]

        })
    }


    return (
        <div id="main-box">
            {gameStart && <div id="pointer" onClick={manualPointerMovement} style={{ top: position.top, left: position.left }}></div>}
        </div>
    )
}

export default GameBox