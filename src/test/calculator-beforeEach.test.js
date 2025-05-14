import { beforeEach, test, expect } from 'vitest'
import { createCalculator } from '../lib/calculator.js'
let calculator
beforeEach(() => {
    calculator = createCalculator()
})
test('adderar 2 + 3', () => {
    expect(calculator.add(2, 3)).toBe(5)
})
test('adderar 10 + 4', () => {
    expect(calculator.add(10, 4)).toBe(14)
})
