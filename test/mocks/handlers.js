// test/mocks/handlers.js
import { http, HttpResponse } from 'msw'

export const handlers = [
    http.post('https://api.example.com/api/token', async ({ request }) => {
        const { username, password } = await request.json()
        if (username === 'hakan@example.com' && password === 'secret123') {
            return new HttpResponse('mocked-jwt-token', {
                status: 200,
                headers: { 'Content-Type': 'text/plain' }
            })
        }
        return HttpResponse.json({ message: 'Unauthorized' }, { status: 401 })
    }),

    http.get('https://api.example.com/books', ({ request }) => {
        const authHeader = request.headers.get('Authorization')
        if (authHeader === 'Bearer mocked-jwt-token') {
            return HttpResponse.json([
                { title: 'The Hobbit' },
                { title: '1984' },
                { title: 'Brave New World' }
            ])
        }
        return HttpResponse.json({ message: 'Forbidden' }, { status: 403 })
    })
]
