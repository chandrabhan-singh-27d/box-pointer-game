import { useGameContext } from "../context/useGameContext"

const ReactionBox = () => {
    const {reactionTimeList} = useGameContext()
    return (
        <table border={2}>
            <thead>
                <tr>
                    <th>Mouse Click Number</th>
                    <th>Reaction Time</th>
                </tr>
            </thead>
            <tbody>
                {reactionTimeList.length > 0 && reactionTimeList.map((rowVal, rowIdx) => (
                    <tr key={rowVal+rowIdx}>
                        <td key={rowIdx}>
                            {rowIdx+1}
                        </td>
                        <td key={rowVal}>
                            {rowVal}
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

export default ReactionBox