import React from 'react';
import './index.scss';
import { useState } from 'react';
import { setSelectionRange } from '@testing-library/user-event/dist/utils';
import Game from './components/Game';
import Result from './components/Result';

export const questions = [
  {
    title: 'React - это ... ?',
    variants: ['библиотека', 'фреймворк', 'приложение'],
    correct: 0,
  },
  {
    title: 'Компонент - это ... ',
    variants: ['приложение', 'часть приложения или страницы', 'то, что я не знаю что такое'],
    correct: 1,
  },
  {
    title: 'Что такое JSX?',
    variants: [
      'Это простой HTML',
      'Это функция',
      'Это тот же HTML, но с возможностью выполнять JS-код',
    ],
    correct: 2,
  },
  {
    title: 'useState - это ... ?',
    variants: ['библиотека', 'хук', 'приложение'],
    correct: 1,
  }, {
    title: 'Пропс - это ... ?',
    variants: ['входные данные', 'функция', 'компонент'],
    correct: 0,
  },
];


// function Result({ correct }) {

//   return (
//     <div className="result">
//       <img src="https://cdn-icons-png.flaticon.com/512/2278/2278992.png" alt="foto" />
//       <h2>Вы отгадали {correct} из {questions.length} вопросов</h2>
//       <a href="/">
//         <button>Попробовать снова</button>
//       </a>
//     </div>
//   );
// }



function App() {
  const [step, setStep] = useState(0);
  const [correct, setCorrect] = useState(0);

  const question = questions[step];

  const onClickVariant = (index) => {
    console.log(step, index);
    setStep(step + 1);

    if (index === question.correct) {
      setCorrect(correct + 1);
    }
  }

  return (
    <div className="App">
      {
        step !== questions.length
          ? <Game step={step} question={question} onClickVariant={onClickVariant} />
          : < Result correct={correct} />
      }
    </div>
  );
}





export default App;



