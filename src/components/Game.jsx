import React from "react";
import { questions } from "../App";


const Game = ({ step, question, onClickVariant }) => {


    const percentage = Math.round(step / questions.length * 100);
    console.log(percentage);

    return (
        <>
            <div div className="progress" >
                <div style={{ width: `${percentage}%` }} className="progress__inner"></div>
            </div >
            <h1>{question.title}</h1>
            <ul>
                {
                    question.variants.map((text, index) =>
                        <li onClick={() => onClickVariant(index)} key={text}>{text}</li>)
                }
            </ul>
        </>
    );
}


export default Game;