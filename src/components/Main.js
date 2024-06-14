import React, { useRef } from 'react'
import { Link } from 'react-router-dom';
import '../styles/Main.css';
function Main() {
    const inputRef = useRef(null);
    return (
        <div className='container'>
            <h1 className='title text-light'>Romano Quiz</h1>
            <ol>
                <li>Welcome to the quiz</li>
                <li>The quiz has 3 levels</li>
                <li>Each level has 10 questions</li>
                <li>Each question has three options. You can choose only one.</li>
                <li>You can review and change answers before the quiz finish.</li>
                <li>The result will be declared at the end of the quiz.</li>
            </ol>
            <form id='form'>
                <input ref={inputRef} className={"userid"}type="text" placeholder="Nume" />
            </form>
            <div className="start">
                <Link className='btn' to={'quiz'}>Start</Link>
            </div>
        </div>
    )
}

export default Main
