import { render, screen } from '@testing-library/react'
import Greeting1 from '../components/Greeting1'

describe('Greeting', () => {
    it('visar välkomsttext', () => {
        render(<Greeting1 />)
        expect(screen.getByText('Hej och välkommen!')).toBeInTheDocument()
    })
})
