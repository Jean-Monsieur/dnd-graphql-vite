import React from 'react'
import CircleIcon from '@mui/icons-material/Circle'
import DiamondIcon from '@mui/icons-material/Diamond'
import { Currency } from '../../types'

type CurrencyIconProps = { currency: Currency }

const currencyIconMap: { [key in Currency]: JSX.Element } = {
  [Currency.PLATINUM]: <DiamondIcon sx={{ color: '#C0C0C0' }} />,
  [Currency.GOLD]: <CircleIcon sx={{ color: '#FFD700' }} />,
  [Currency.ELECTRUM]: <CircleIcon sx={{ color: '#4682B4' }} />,
  [Currency.SILVER]: <CircleIcon sx={{ color: '#C0C0C0' }} />,
  [Currency.COPPER]: <CircleIcon sx={{ color: '#b87333' }} />,
}

const CurrencyIcon: React.FC<CurrencyIconProps> = ({ currency }) => {
  return currencyIconMap[currency] || <CircleIcon sx={{ color: '#b87333' }} />
}

export default CurrencyIcon
