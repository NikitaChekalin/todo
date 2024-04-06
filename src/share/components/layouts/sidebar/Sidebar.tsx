import { Navbar, ScrollArea } from '@mantine/core'
import { LAYOUT_SIZES } from '@share/constants'

import { MENU_ITEMS } from './share/constants'
import { LinksGroup } from './share/ui'
import { useSidebarStyles } from './styles'

interface Sidebar {
  opened?: boolean
}

export const Sidebar = ({ opened = true }: Sidebar) => {
  const { classes } = useSidebarStyles()

  return (
    <Navbar
      py='xs'
      px='md'
      hiddenBreakpoint='sm'
      hidden={!opened}
      width={{ base: LAYOUT_SIZES.SIDEBAR_WIDTH }}
    >
      <Navbar.Section grow className={classes.links} component={ScrollArea}>
        {MENU_ITEMS.map((item) => (
          <LinksGroup key={item.label} {...item} />
        ))}
      </Navbar.Section>
    </Navbar>
  )
}
