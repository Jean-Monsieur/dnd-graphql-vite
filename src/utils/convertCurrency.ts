import { Currency } from "../types";

type ConversionRates = {
  [key in Currency]: Partial<Record<Currency, number>>;
};

const conversionRates: ConversionRates = {
  [Currency.PLATINUM]: {
    [Currency.GOLD]: 10,
    [Currency.ELECTRUM]: 20,
    [Currency.SILVER]: 100,
    [Currency.COPPER]: 1000,
  },
  [Currency.GOLD]: {
    [Currency.PLATINUM]: 1 / 10,
    [Currency.ELECTRUM]: 2,
    [Currency.SILVER]: 10,
    [Currency.COPPER]: 100,
  },
  [Currency.ELECTRUM]: {
    [Currency.PLATINUM]: 1 / 20,
    [Currency.GOLD]: 1 / 2,
    [Currency.SILVER]: 5,
    [Currency.COPPER]: 50,
  },
  [Currency.SILVER]: {
    [Currency.PLATINUM]: 1 / 100,
    [Currency.GOLD]: 1 / 10,
    [Currency.ELECTRUM]: 1 / 5,
    [Currency.COPPER]: 10,
  },
  [Currency.COPPER]: {
    [Currency.PLATINUM]: 1 / 1000,
    [Currency.GOLD]: 1 / 100,
    [Currency.ELECTRUM]: 1 / 50,
    [Currency.SILVER]: 1 / 10,
  },
};

export const getConvertedCurrencyValue = (
  value: number,
  initialCurrency: Currency,
  targetCurrency: Currency,
): number => {
  if (initialCurrency === targetCurrency) {
    return value;
  }

  const rate = conversionRates[initialCurrency]?.[targetCurrency];
  return rate !== undefined ? value * rate : 0;
};
