// Övning 3 – NameSetter med knapp och state

import { useState } from 'react'

const NameSetter = () => {
    const [showName, setShowName] = useState(false)

    return (
        <div>
            <button onClick={() => setShowName(true)}>Visa namn</button>
            {showName && <p>Hej Mika!</p>}
        </div>
    )
}

export default NameSetter
