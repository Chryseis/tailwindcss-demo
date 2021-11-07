import './App.css'
import React, { useState } from 'react'

function App() {
    const [disabled, setDisabled] = useState(false)

    return (
        <div className="app dark">
            <button className="dark:bg-black" onClick={() => setDisabled((pre) => !pre)}>
                {' '}
                click
            </button>
            <button className="button" disabled={disabled}>
                Hello
            </button>
        </div>
    )
}

export default App
