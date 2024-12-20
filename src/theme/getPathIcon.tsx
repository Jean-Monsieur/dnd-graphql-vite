import AutoFixHighIcon from '@mui/icons-material/AutoFixHigh'
import BackpackIcon from '@mui/icons-material/Backpack'
import BookIcon from '@mui/icons-material/Book'
import BuildIcon from '@mui/icons-material/Build'
import HomeIcon from '@mui/icons-material/Home'
import Icon from '@mdi/react'
import OfflineBoltIcon from '@mui/icons-material/OfflineBolt'
import PendingIcon from '@mui/icons-material/Pending'
import SchoolIcon from '@mui/icons-material/School'
import { mdiGhost } from '@mdi/js'
import { PathIcons } from '../rootStruct'

const iconMapping: { [key in PathIcons]: JSX.Element } = {
  [PathIcons.HOME]: <HomeIcon />,
  [PathIcons.MONSTERS]: (
    <Icon path={mdiGhost} size={1} horizontal vertical rotate={180} />
  ),
  [PathIcons.EQUIPMENT]: <BackpackIcon />,
  [PathIcons.MAGIC]: <BookIcon />,
  [PathIcons.MAGIC_ITEMS]: <AutoFixHighIcon />,
  [PathIcons.SPELLS]: <OfflineBoltIcon />,
  [PathIcons.MAGIC_SCHOOL]: <SchoolIcon />,
  [PathIcons.TOOLS]: <BuildIcon />,
}

export const getPathIcon = (icon: PathIcons | string): JSX.Element => {
  return iconMapping[icon as PathIcons] || <PendingIcon />
}
