import { createContext, useContext, useState } from "react";

// create the context itself. THIS IS WHAT COMPONENTS WILL IMPORT
export const primaryContext = createContext();

// create Provider. THIS IS WHAT WILL SURROUND THE APP

export const PrimaryProvider = (props) => {
    // 1. create our state that our app needs
    const [currentMood, setCurrentMood] = useState("fine");
    const [compliments, setCompliments] = useState(0);


    const updateMood = (compliments) => {
        if (compliments < 5) {
            setCurrentMood("sad");
        } else if (compliments >= 5 && compliments <= 9) {
            setCurrentMood("fine");
        } else if (compliments >= 10 && compliments <= 15) {
            setCurrentMood("happy");
        }
    };


    return (
        <primaryContext.Provider value={
            {
                currentMood,
                setCurrentMood,
                compliments,
                setCompliments,
                updateMood
            }
        }>
            {props.children}
        </primaryContext.Provider>
    )

}