import { DistanceUnit } from '../types'

const conversionRates: Record<
  DistanceUnit,
  Partial<Record<DistanceUnit, number>>
> = {
  [DistanceUnit.METER]: {
    [DistanceUnit.FEET]: 3.2808,
    [DistanceUnit.SQUARES]: 1 / 1.5,
  },
  [DistanceUnit.FEET]: {
    [DistanceUnit.METER]: 1 / 3.2808,
    [DistanceUnit.SQUARES]: 1 / 5,
  },
  [DistanceUnit.SQUARES]: { [DistanceUnit.METER]: 1.5, [DistanceUnit.FEET]: 5 },
}

export const convertDistanceUnits = (
  value: number,
  initialUnit: DistanceUnit,
  targetUnit: DistanceUnit,
): number =>
  initialUnit === targetUnit
    ? value
    : value * (conversionRates[initialUnit]?.[targetUnit] ?? 0)
