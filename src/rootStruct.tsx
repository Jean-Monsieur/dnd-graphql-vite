export enum PathIcons {
  HOME = '/',
  MONSTERS = '/monsters',
  EQUIPMENT = '/equipment',
  MAGIC = '/magic',
  SPELLS = '/spells',
  MAGIC_ITEMS = '/magic-item',
  MAGIC_SCHOOL = '/magic-schools',
  TOOLS = '/tools',
}

export enum PATHS {
  HOME = '/',
  MONSTERS = '/monsters',
  EQUIPMENT = '/equipment',
  MAGIC = '/magic',
  SPELLS = '/spells',
  MAGIC_ITEMS = '/magic-item',
  MAGIC_SCHOOL = '/magic-schools',
  TOOLS = '/tools',
  ACCOUNT = '/account',
  PROFILE = '/profile',
}

export enum PathCategory {
  MAGIC = 'MAGIC',
}
type RootItem = {
  id: string
  name: string
  path: PATHS
  iconName: PathIcons
  category?: PathCategory
}

export const rootStruct: RootItem[] = [
  {
    id: 'home',
    name: 'Home',
    path: PATHS.HOME,
    iconName: PathIcons.HOME,
  },
  {
    id: 'monsters',
    name: 'Monsters',
    path: PATHS.MONSTERS,
    iconName: PathIcons.MONSTERS,
  },
  {
    id: 'equipments',
    name: 'Equipments',
    path: PATHS.EQUIPMENT,
    iconName: PathIcons.EQUIPMENT,
  },
  {
    id: 'magic',
    name: 'Magic',
    path: PATHS.MAGIC,
    iconName: PathIcons.MAGIC,
    category: PathCategory.MAGIC,
  },
  {
    id: 'spells',
    name: 'Spells',
    path: PATHS.SPELLS,
    iconName: PathIcons.SPELLS,
    category: PathCategory.MAGIC,
  },
  {
    id: 'magicItems',
    name: 'Magic Items',
    path: PATHS.MAGIC_ITEMS,
    iconName: PathIcons.MAGIC_ITEMS,
    category: PathCategory.MAGIC,
  },
  {
    id: 'magicschools',
    name: 'Magic Schools',
    path: PATHS.MAGIC_SCHOOL,
    iconName: PathIcons.MAGIC_SCHOOL,
    category: PathCategory.MAGIC,
  },
  {
    id: 'tools',
    name: 'Tools',
    path: PATHS.TOOLS,
    iconName: PathIcons.TOOLS,
    category: PathCategory.MAGIC,
  },
]
