import { useState } from 'react'

const BookList = () => {
    const [books, setBooks] = useState([])
    const [token, setToken] = useState('')
    const [error, setError] = useState('')

    const loginAndFetch = async () => {
        try {
            const res = await fetch('https://api.example.com/api/token', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    username: 'hakan@example.com',
                    password: 'secret123'
                })
            })

            if (!res.ok) throw new Error('Login failed')
            const token = await res.text()
            setToken(token)

            const bookRes = await fetch('https://api.example.com/books', {
                headers: { Authorization: `Bearer ${token}` }
            })

            if (!bookRes.ok) throw new Error('Failed to fetch books')
            const bookData = await bookRes.json()
            setBooks(bookData)
        } catch (err) {
            setError(err.message)
        }
    }

    return (
        <div>
            <button onClick={loginAndFetch}>Logga in och hämta böcker</button>
            {error && <p>{error}</p>}
            <ul>
                {books.map((b, i) => (
                    <li key={i}>
                        <strong>{b.title}</strong>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default BookList
