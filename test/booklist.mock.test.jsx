import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import { describe, it, expect, beforeAll, afterEach, afterAll } from 'vitest'
import { server } from './mocks/server'
import BookList from '../src/components/BookList'
import 'whatwg-fetch'

beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())

it('hämtar och visar böcker efter inloggning', async () => {
    render(<BookList />)
    fireEvent.click(screen.getByRole('button'))

    await waitFor(() => {
        expect(screen.getByText(/The Hobbit/)).toBeInTheDocument()
    })
})
