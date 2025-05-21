import { render, screen } from '@testing-library/react'
import Greeting1 from '../components/Greeting1'

describe('Greeting', () => {
  it('visar namnet från props', () => {
      render(<Greeting name="Linnea" />)
      expect(screen.getByText('Hej Linnea!')).toBeInTheDocument()
  })
})
