import './App.css'
import React, { useState } from 'react'

function App() {
    const [disabled, setDisabled] = useState(false)

    return (
        <div className="app block h-screen hover:bg-yellow-50">
            <button className="dark:bg-black" onClick={() => setDisabled((pre) => !pre)}>
                {' '}
                click
            </button>
            <button className="button text-8xl text-blue-300 block-hover:text-red-300" disabled={disabled}>
                Hello
            </button>
            <div className="w-full h-1/2 bg-green-300 block-hover:bg-red-300">test</div>
        </div>
    )
}

export default App
