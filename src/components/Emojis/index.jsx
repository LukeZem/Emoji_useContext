import React, { useContext } from 'react'
import { primaryContext } from '../../contexts/primaryContext';

const Emojis = () => {

    const { currentMood, setCurrentMood } = useContext(primaryContext);
    const { compliments, setCompliments } = useContext(primaryContext);
    const { updateMood } = useContext(primaryContext);

    const emojiMap = {
        happy: "😃",
        fine: "😐",
        sad: "😞",
    };



    return (
        <div>
            <h2>Your Mood: {emojiMap[currentMood]}</h2>
            <div>{currentMood}, {compliments}</div>
        </div>
    )
}

export default Emojis