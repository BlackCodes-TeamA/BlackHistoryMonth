import React from 'react';
import ReactDOM from 'react-dom';
import MusicQuiz from './components/MusicQuiz';
import HistoryQuiz from './components/HistoryQuiz';
import SportsQuiz from './components/SportsQuiz';
import ScienceQuiz from './components/ScienceQuiz';

import './styles.css';

function App() {
    return (
        <div className="App">
            <MusicQuiz />
            <HistoryQuiz />
            <SportsQuiz />
            <ScienceQuiz />
        </div>
    )
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App></App>, rootElement) //renders the component(first parameter) as a child of the element(second parameter)


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
