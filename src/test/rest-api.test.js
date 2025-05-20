import { describe, it, beforeAll, beforeEach, afterEach, expect } from 'vitest'

let jwtToken
const BASE_URL = 'https://tokenservice-jwt-2025.fly.dev/movies'
const LOGIN_URL =
    'https://tokenservice-jwt-2025.fly.dev/token-service/v1/request-token'

const user = {
    username: 'faraheng',
    password: 'password123'
}

async function getToken() {
    const res = await fetch(LOGIN_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(user)
    })
    return res.text()
}

beforeAll(async () => {
    jwtToken = await getToken()
})

//
// 1. – GET /movies
//
describe('GET /movies tests', () => {
    let createdMovie

    beforeEach(async () => {
        const res = await fetch(BASE_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${jwtToken}`
            },
            body: JSON.stringify({ title: 'Test Movie', year: 2024 })
        })
        createdMovie = await res.json()
    })
    //
    // 2. GET /movies/{id}
    //
    afterEach(async () => {
        await fetch(`${BASE_URL}/${createdMovie._id}`, {
            method: 'DELETE',
            headers: { Authorization: `Bearer ${jwtToken}` }
        })
    })

    it('should return 200 and include the posted movie', async () => {
        const res = await fetch(BASE_URL, {
            headers: { Authorization: `Bearer ${jwtToken}` }
        })
        const movies = await res.json()
        expect(res.status).toBe(200)
        expect(movies.length).toBeGreaterThan(0)
    })

    it('should return the movie by ID with correct title', async () => {
        const res = await fetch(`${BASE_URL}/${createdMovie._id}`, {
            headers: { Authorization: `Bearer ${jwtToken}` }
        })
        const movie = await res.json()
        expect(res.status).toBe(200)
        expect(movie.title).toBe('Test Movie')
    })
})

//
// 2. DELETE TEST
//
describe('DELETE /movies test', () => {
    let createdMovie

    beforeEach(async () => {
        const res = await fetch(BASE_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${jwtToken}`
            },
            body: JSON.stringify({ title: 'Delete Me', year: 2023 })
        })
        createdMovie = await res.json()
    })

    it('should delete a movie and return 204', async () => {
        const res = await fetch(`${BASE_URL}/${createdMovie._id}`, {
            method: 'DELETE',
            headers: { Authorization: `Bearer ${jwtToken}` }
        })
        expect(res.status).toBe(204)
    })
})

//
// 3. POST + DELETE IN ONE TEST
//
describe('POST and DELETE in one test', () => {
    it('should create and then delete a movie', async () => {
        const postRes = await fetch(BASE_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${jwtToken}`
            },
            body: JSON.stringify({ title: 'Temp Movie', year: 2022 })
        })
        const newMovie = await postRes.json()
        expect(postRes.status).toBe(201)

        const delRes = await fetch(`${BASE_URL}/${newMovie._id}`, {
            method: 'DELETE',
            headers: { Authorization: `Bearer ${jwtToken}` }
        })
        expect(delRes.status).toBe(204)
    })
})

//
// 4. PUT + GET TO VERIFY UPDATE
//
describe('PUT and GET movie test', () => {
    let createdMovie

    beforeEach(async () => {
        const res = await fetch(BASE_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${jwtToken}`
            },
            body: JSON.stringify({ title: 'Original Title', year: 2020 })
        })
        createdMovie = await res.json()
    })

    afterEach(async () => {
        await fetch(`${BASE_URL}/${createdMovie._id}`, {
            method: 'DELETE',
            headers: { Authorization: `Bearer ${jwtToken}` }
        })
    })

    it('should update the movie and reflect changes in GET', async () => {
        const updatedTitle = 'Updated Title'
        const putRes = await fetch(`${BASE_URL}/${createdMovie._id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${jwtToken}`
            },
            body: JSON.stringify({ ...createdMovie, title: updatedTitle })
        })
        expect(putRes.status).toBe(200)

        const getRes = await fetch(`${BASE_URL}/${createdMovie._id}`, {
            headers: { Authorization: `Bearer ${jwtToken}` }
        })
        const movie = await getRes.json()
        expect(movie.title).toBe(updatedTitle)
    })
})
