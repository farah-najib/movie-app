import { render, screen, fireEvent } from '@testing-library/react'
import NameForm from '../components/NameForm'

describe('NameForm', () => {
    it('sparar och visar namn efter input och klick', () => {
        render(<NameForm />)
        const input = screen.getByLabelText('Namn')
        fireEvent.change(input, { target: { value: 'Mika' } })

        fireEvent.click(screen.getByRole('button', { name: /Spara/i }))
        expect(screen.getByText('Du skrev: Mika')).toBeInTheDocument()
    })
})
