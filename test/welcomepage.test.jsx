import { render, screen, fireEvent } from '@testing-library/react'
import WelcomePage from '../components/WelcomePage'

describe('WelcomePage', () => {
    it('visar Greeting och NameSetter', () => {
        render(<WelcomePage />)
        expect(screen.getByText('Hej Linnea!')).toBeInTheDocument()
        expect(
            screen.getByRole('button', { name: /Visa namn/i })
        ).toBeInTheDocument()
    })

    it('visar namn efter klick', () => {
        render(<WelcomePage />)
        fireEvent.click(screen.getByRole('button', { name: /Visa namn/i }))
        expect(screen.getByText('Hej Mika!')).toBeInTheDocument()
    })
})
