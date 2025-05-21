import { render, screen, fireEvent } from '@testing-library/react'
import Stepper from '../components/Stepper'

describe('Stepper', () => {
    it('ökar vid klick på +', () => {
        render(<Stepper />)
        fireEvent.click(screen.getByText('+'))
        expect(screen.getByTestId('counter')).toHaveTextContent('1')
    })

    it('minskar vid klick på -', () => {
        render(<Stepper />)
        fireEvent.click(screen.getByText('-'))
        expect(screen.getByTestId('counter')).toHaveTextContent('-1')
    })

    it('flera klick fungerar korrekt', () => {
        render(<Stepper />)
        const plus = screen.getByText('+')
        fireEvent.click(plus)
        fireEvent.click(plus)
        fireEvent.click(plus)
        expect(screen.getByTestId('counter')).toHaveTextContent('3')
    })
})
