import { expect, describe, it } from 'vitest'
import { truncateDecimals, stringToNbr } from './index'

describe('truncateDecimals', () => {
  it('should truncate a number to the specified number of decimals', () => {
    expect(truncateDecimals(3.14159, 2)).toBe('3.14')
    expect(truncateDecimals(12.34567, 3)).toBe('12.346')
  })

  it('should handle whole numbers', () => {
    expect(truncateDecimals(10, 2)).toBe('10.00')
  })

  it('should use 2 decimals by default', () => {
    expect(truncateDecimals(2.71828)).toBe('2.72')
  })

  it('should handle negative numbers', () => {
    expect(truncateDecimals(-5.6789, 2)).toBe('-5.68')
  })
})

describe('stringToNbr', () => {
  it('should convert a string to a number', () => {
    expect(stringToNbr('123')).toBe(123)
  })

  it('should handle decimal numbers', () => {
    expect(stringToNbr('3.14')).toBe(3.14)
  })

  it('should handle negative numbers', () => {
    expect(stringToNbr('-42')).toBe(-42)
  })

  it('should remove non-numeric characters except for "." and "-"', () => {
    expect(stringToNbr('1a2b3c')).toBe(123)
    expect(stringToNbr('$1,000.50')).toBe(1000.5)
  })

  it('should handle empty strings', () => {
    expect(stringToNbr('')).toBe(0)
  })
})
