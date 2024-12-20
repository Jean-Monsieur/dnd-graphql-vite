import { expect, describe, it } from 'vitest'
import { Currency } from '../types'
import { getConvertedCurrencyValue } from './convertCurrency'

describe('getConvertedCurrencyValue', () => {
  it('should return the same value if initial and target currencies are the same', () => {
    expect(getConvertedCurrencyValue(10, Currency.GOLD, Currency.GOLD)).toBe(10)
  })

  it('should convert from Platinum to other currencies correctly', () => {
    expect(getConvertedCurrencyValue(1, Currency.PLATINUM, Currency.GOLD)).toBe(
      10,
    )
    expect(
      getConvertedCurrencyValue(1, Currency.PLATINUM, Currency.ELECTRUM),
    ).toBe(20)
    expect(
      getConvertedCurrencyValue(1, Currency.PLATINUM, Currency.SILVER),
    ).toBe(100)
    expect(
      getConvertedCurrencyValue(1, Currency.PLATINUM, Currency.COPPER),
    ).toBe(1000)
  })

  it('should convert from Gold to other currencies correctly', () => {
    expect(
      getConvertedCurrencyValue(10, Currency.GOLD, Currency.PLATINUM),
    ).toBe(1)
    expect(getConvertedCurrencyValue(1, Currency.GOLD, Currency.ELECTRUM)).toBe(
      2,
    )
    expect(getConvertedCurrencyValue(1, Currency.GOLD, Currency.SILVER)).toBe(
      10,
    )
    expect(getConvertedCurrencyValue(1, Currency.GOLD, Currency.COPPER)).toBe(
      100,
    )
  })

  it('should convert from Electrum to other currencies correctly', () => {
    expect(
      getConvertedCurrencyValue(20, Currency.ELECTRUM, Currency.PLATINUM),
    ).toBe(1)
    expect(getConvertedCurrencyValue(2, Currency.ELECTRUM, Currency.GOLD)).toBe(
      1,
    )
    expect(
      getConvertedCurrencyValue(1, Currency.ELECTRUM, Currency.SILVER),
    ).toBe(5)
    expect(
      getConvertedCurrencyValue(1, Currency.ELECTRUM, Currency.COPPER),
    ).toBe(50)
  })

  it('should convert from Silver to other currencies correctly', () => {
    expect(
      getConvertedCurrencyValue(100, Currency.SILVER, Currency.PLATINUM),
    ).toBe(1)
    expect(getConvertedCurrencyValue(10, Currency.SILVER, Currency.GOLD)).toBe(
      1,
    )
    expect(
      getConvertedCurrencyValue(5, Currency.SILVER, Currency.ELECTRUM),
    ).toBe(1)
    expect(getConvertedCurrencyValue(1, Currency.SILVER, Currency.COPPER)).toBe(
      10,
    )
  })

  it('should convert from Copper to other currencies correctly', () => {
    expect(
      getConvertedCurrencyValue(1000, Currency.COPPER, Currency.PLATINUM),
    ).toBe(1)
    expect(getConvertedCurrencyValue(100, Currency.COPPER, Currency.GOLD)).toBe(
      1,
    )
    expect(
      getConvertedCurrencyValue(50, Currency.COPPER, Currency.ELECTRUM),
    ).toBe(1)
    expect(
      getConvertedCurrencyValue(10, Currency.COPPER, Currency.SILVER),
    ).toBe(1)
  })

  it('should return 0 if the conversion rate is not found', () => {
    // Assuming there's no conversion rate between GOLD and an unknown currency
    const unknownCurrency = 'UNKNOWN' as Currency
    expect(getConvertedCurrencyValue(10, Currency.GOLD, unknownCurrency)).toBe(
      0,
    )
  })
})
