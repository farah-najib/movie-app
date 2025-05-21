import { render, screen, fireEvent } from '@testing-library/react'
import NameSetter from '../components/NameSetter'

describe('NameSetter', () => {
    it('visar inte namnet från början', () => {
        render(<NameSetter />)
        expect(screen.queryByText('Hej Mika!')).not.toBeInTheDocument()
    })

    it('visar namnet efter klick', () => {
        render(<NameSetter />)
        fireEvent.click(screen.getByRole('button', { name: /Visa namn/i }))
        expect(screen.getByText('Hej Mika!')).toBeInTheDocument()
    })
})
