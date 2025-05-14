import { beforeAll, test, expect } from 'vitest'
import { createCalculator } from '../lib/calculator.js'
let calculator
beforeAll(() => {
    calculator = createCalculator()
})
test('adderar 1 + 1', () => {
    expect(calculator.add(1, 1)).toBe(2)
})
test('adderar 5 + 6', () => {
    expect(calculator.add(5, 6)).toBe(11)
})
