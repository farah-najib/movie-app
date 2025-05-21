// Övning 5 – NameForm med input och knapp

import { useState } from 'react'
const NameForm = () => {
    const [name, setName] = useState('')
    const [savedName, setSavedName] = useState('')

    return (
        <div>
            <input
                type="text"
                aria-label="Namn"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <button onClick={() => setSavedName(name)}>Spara</button>
            {savedName && <p>Du skrev: {savedName}</p>}
        </div>
    )
}

export default NameForm
