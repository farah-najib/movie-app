// Övning 8 – Stepper-komponent
import { useState } from 'react'

const Stepper = () => {
    const [count, setCount] = useState(0)

    return (
        <div>
            <p data-testid="counter">{count}</p>
            <button onClick={() => setCount(count + 1)}>+</button>
            <button onClick={() => setCount(count - 1)}>-</button>
        </div>
    )
}

export default Stepper
