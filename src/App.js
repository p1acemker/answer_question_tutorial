// import logo from './logo.svg';
// import './App.css';
// import HelloWorld from'./HelloWorld.js'
// import SimpleCounter from './SimpleCounter.js'
// import TemperatureController from "./tutorial/TemperatureController";
// function App() {
//   return (
//     <div className="App">
//        {/* <HelloWorld />*/}
//        {/*<SimpleCounter/>*/}
//         <TemperatureController/>
//      </div>
//   );
// }
//
// export default App;
import React, { useState } from 'react';

export default function App() {
    const questions = [
        {
            questionText: 'What is the capital of France?',
            answerOptions: [
                { answerText: 'New York', isCorrect: false },
                { answerText: 'London', isCorrect: false },
                { answerText: 'Paris', isCorrect: true },
                { answerText: 'Dublin', isCorrect: false },
            ],
        },
        {
            questionText: 'Who is CEO of Tesla?',
            answerOptions: [
                { answerText: 'Jeff Bezos', isCorrect: false },
                { answerText: 'Elon Musk', isCorrect: true },
                { answerText: 'Bill Gates', isCorrect: false },
                { answerText: 'Tony Stark', isCorrect: false },
            ],
        },
        {
            questionText: 'The iPhone was created by which company?',
            answerOptions: [
                { answerText: 'Apple', isCorrect: true },
                { answerText: 'Intel', isCorrect: false },
                { answerText: 'Amazon', isCorrect: false },
                { answerText: 'Microsoft', isCorrect: false },
            ],
        },
        {
            questionText: 'How many Harry Potter books are there?',
            answerOptions: [
                { answerText: '1', isCorrect: false },
                { answerText: '4', isCorrect: false },
                { answerText: '6', isCorrect: false },
                { answerText: '7', isCorrect: true },
            ],
        },
    ];
    const [anser_boolean,set_answer_boolean]=useState(false)
    const [question_num,set_question_num]=useState(1)
    const [grade_num,set_grade_num]=useState(0)
    const update_paper=(answer)=>{
        if (questions[question_num-1]['answerOptions'][answer]['isCorrect']){
            console.log((questions[question_num-1]['answerOptions'][answer]['isCorrect']))
            set_grade_num(grade_num+1)
        }
        set_question_num(question_num+1)
        if (question_num===4){
            set_answer_boolean(true)
        }

    }
    return (
        <div className='app'>
            {/* HINT: replace "false" with logic to display the
      score when the user has answered all the questions */}
            {anser_boolean ? (
                <div className='score-section'>You scored {grade_num} out of {questions.length}</div>
            ) : (
                <>
                    <div className='question-section'>
                        <div className='question-count'>
                            <span>Question {question_num}</span>/{questions.length}
                        </div>
                        <div className='question-text'>{questions[question_num-1]['questionText']}</div>
                    </div>
                    <div className='answer-section'>
                        <button onClick={()=>update_paper(0)}>{questions[question_num-1]['answerOptions'][0]['answerText']}</button>
                        <button onClick={()=>update_paper(1)}>{questions[question_num-1]['answerOptions'][1]['answerText']}</button>
                        <button onClick={()=>update_paper(2)}>{questions[question_num-1]['answerOptions'][2]['answerText']}</button>
                        <button onClick={()=>update_paper(3)}>{questions[question_num-1]['answerOptions'][3]['answerText']}</button>
                    </div>
                </>
            )}
        </div>
    );
}
