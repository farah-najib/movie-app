import { render, screen, fireEvent } from '@testing-library/react'
import NameChanger from '../src/componentse/NameChanger'

describe('NameChanger', () => {
    it('visar default-namnet', () => {
        render(<NameChanger />)
        expect(screen.getByText('Hej, Kasper!')).toBeInTheDocument()
    })

    it('byter namn när knappen klickas', () => {
        render(<NameChanger />)
        const button = screen.getByRole('button')
        fireEvent.click(button)
        expect(screen.getByText('Hej, Mika!')).toBeInTheDocument()
    })
})
