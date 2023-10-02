import React, { useContext } from 'react'
import { primaryContext } from '../../contexts/primaryContext'

const ComplimentsButton = () => {

    const { currentMood, compliments, setCompliments, updateMood } = useContext(primaryContext)

    const handleClick = () => {
        setCompliments(compliments + 1)
        updateMood(compliments + 1)
        console.log(compliments);
        console.log(currentMood);
    }

    return (
        <div>
            <button onClick={handleClick}>Compliment</button>
        </div>
    )
}

export default ComplimentsButton