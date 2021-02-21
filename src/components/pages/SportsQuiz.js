import React, { Component } from 'react';
import {SportsData} from './SportsData';
import './Quiz.css';

export class Sports extends Component {
    render() {
        return (
            <div>
                <SportsData />
            </div>
        )
    }
}

// const SportsQuiz = () => {
//     return ( 
//     <div className="questionBox">
//           <div className="question"></div>
//             <button className="answerBtn">
//             </button>
          
//         </div>
//     )
//     }
    export default SportsQuiz;