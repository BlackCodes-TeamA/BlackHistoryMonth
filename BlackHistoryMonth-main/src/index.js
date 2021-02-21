import React from 'react';
import ReactDOM from 'react-dom';
import MusicQuiz from './components/pages/MusicQuiz';
import HistoryQuiz from './components/pages/HistoryQuiz';
import SportsQuiz from './components/pages/SportsQuiz';
import ScienceQuiz from './components/pages/ScienceQuiz';

import './index.css';

function App() {
    return (
        <div className="App">
            <MusicQuiz />
            <SportsQuiz/>

        </div>
    )
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App/>, rootElement) //renders the component(first parameter) as a child of the element(second parameter)


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

