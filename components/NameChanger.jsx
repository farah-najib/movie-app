import { useState } from 'react'

const NameChanger = () => {
    const [name, setName] = useState('Kasper')

    return (
        <div>
            <p>Hej, {name}!</p>
            <button onClick={() => setName('Mika')}>Byt namn</button>
        </div>
    )
}

export default NameChanger
