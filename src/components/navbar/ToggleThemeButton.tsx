import Brightness4Icon from '@mui/icons-material/Brightness4'
import Brightness7Icon from '@mui/icons-material/Brightness7'
import { IconButton, useTheme } from '@mui/material'
import { ThemeMode } from '../../theme/theme'

type ToggleThemeButtonProps = {
  onThemeToggled: () => void
}

const ToggleThemeButton = ({ onThemeToggled }: ToggleThemeButtonProps) => {
  const theme = useTheme()

  return (
    <IconButton sx={{ ml: 1 }} onClick={onThemeToggled} color='secondary'>
      {theme.palette.mode === ThemeMode.DARK ? (
        <Brightness7Icon />
      ) : (
        <Brightness4Icon />
      )}
    </IconButton>
  )
}

export default ToggleThemeButton
