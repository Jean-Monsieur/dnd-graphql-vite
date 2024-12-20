import { expect, describe, it } from 'vitest'
import { DistanceUnit } from '../types'
import { convertDistanceUnits } from './convertDistanceUnits' // Assuming this is in utils.ts

describe('convertDistanceUnits', () => {
  it('should return the same value if initial and target units are the same', () => {
    expect(
      convertDistanceUnits(10, DistanceUnit.METER, DistanceUnit.METER),
    ).toBe(10)
    expect(convertDistanceUnits(5, DistanceUnit.FEET, DistanceUnit.FEET)).toBe(
      5,
    )
    expect(
      convertDistanceUnits(2, DistanceUnit.SQUARES, DistanceUnit.SQUARES),
    ).toBe(2)
  })

  it('should convert from Meters to other units correctly', () => {
    expect(
      convertDistanceUnits(1, DistanceUnit.METER, DistanceUnit.FEET),
    ).toBeCloseTo(3.2808)
    expect(
      convertDistanceUnits(1, DistanceUnit.METER, DistanceUnit.SQUARES),
    ).toBeCloseTo(1 / 1.5)
  })

  it('should convert from Feet to other units correctly', () => {
    expect(
      convertDistanceUnits(3.2808, DistanceUnit.FEET, DistanceUnit.METER),
    ).toBeCloseTo(1)
    expect(
      convertDistanceUnits(1, DistanceUnit.FEET, DistanceUnit.SQUARES),
    ).toBeCloseTo(1 / 5)
  })

  it('should convert from Squares to other units correctly', () => {
    expect(
      convertDistanceUnits(1 / 1.5, DistanceUnit.SQUARES, DistanceUnit.METER),
    ).toBeCloseTo(1)
    expect(
      convertDistanceUnits(1 / 5, DistanceUnit.SQUARES, DistanceUnit.FEET),
    ).toBeCloseTo(1)
  })

  it('should return 0 if the conversion rate is not found', () => {
    // Assuming there's no conversion rate between METER and an unknown unit
    const unknownUnit = 'UNKNOWN' as DistanceUnit
    expect(convertDistanceUnits(10, DistanceUnit.METER, unknownUnit)).toBe(0)
  })
})
