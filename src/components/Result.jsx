import React from "react";
import { questions } from "../App";

const Result = ({ correct }) => {
    return (
        <div className="result">
            <img src="https://cdn-icons-png.flaticon.com/512/2278/2278992.png" alt="foto" />
            <h2>Вы отгадали {correct} из {questions.length} вопросов</h2>
            <a href="/">
                <button>Попробовать снова</button>
            </a>
        </div>
    );
}



export default Result;