import React from 'react'
import { getPathIcon } from '../../theme/getPathIcon'
import { Link } from 'react-router-dom'
import { rootStruct } from '../../rootStruct'
import {
  Box,
  Drawer,
  DrawerProps,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Toolbar,
} from '@mui/material'

type AppDrawerProps = {
  onItemClick: () => void
} & Omit<DrawerProps, 'anchor'>

const linkStyle = {
  '&:hover': {
    color: 'inherit',
    textDecoration: 'none',
  },
  '&:visited': {
    color: 'inherit',
    textDecoration: 'none',
  },
  '&:active': {
    color: 'inherit',
    textDecoration: 'none',
  },
}

const AppDrawer: React.FC<AppDrawerProps> = ({ onItemClick, ...props }) => {
  return (
    <Drawer anchor='left' {...props}>
      <Toolbar />
      <Box sx={{ height: '100%' }} role='presentation'>
        <List>
          {rootStruct.map(({ id, name, iconName, path }) => (
            <ListItem
              key={id}
              component={Link}
              to={path}
              sx={linkStyle}
              onClick={onItemClick}
            >
              <ListItemIcon>{getPathIcon(iconName)}</ListItemIcon>
              <ListItemText primary={name} />
            </ListItem>
          ))}
        </List>
      </Box>
    </Drawer>
  )
}

export default AppDrawer
