import { test, expect } from 'vitest'
import { createCalculator } from '../lib/calculator.js'
test('adderar två tal', () => {
    const calculator = createCalculator()
    expect(calculator.add(2, 2)).toBe(4)
})
