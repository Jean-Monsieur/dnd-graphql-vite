import React, { useState } from 'react'
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material'
import Icon from '@mdi/react'
import {
  mdiDiceD20,
  mdiDiceD12,
  mdiDiceD10,
  mdiDiceD8,
  mdiDiceD6,
  mdiDiceD4,
} from '@mdi/js'
import { Dice } from './types'

const diceIcons = {
  [Dice.D20]: mdiDiceD20,
  [Dice.D12]: mdiDiceD12,
  [Dice.D10]: mdiDiceD10,
  [Dice.D8]: mdiDiceD8,
  [Dice.D6]: mdiDiceD6,
  [Dice.D4]: mdiDiceD4,
}

const DiceSelector: React.FC = () => {
  const [selectedDice, setSelectedDice] = useState<Dice>(Dice.D20)

  return (
    <FormControl>
      <InputLabel>Dé</InputLabel>
      <Select
        value={selectedDice}
        onChange={e => setSelectedDice(e.target.value as Dice)}
        label='Dé'
        autoWidth
      >
        {Object.entries(diceIcons).map(([key, icon]) => (
          <MenuItem key={key} value={key}>
            <Icon path={icon} size={1} horizontal vertical rotate={180} />
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  )
}

export default DiceSelector
