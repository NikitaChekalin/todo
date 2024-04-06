import { useState } from 'react'
import { Outlet } from 'react-router-dom'

import { AppShell } from '@mantine/core'

import { Header } from '../header/Header'
import { Sidebar } from '../sidebar/Sidebar'

export const MainLayout = () => {
  const [opened, setOpened] = useState(false)

  return (
    <AppShell
      navbarOffsetBreakpoint='sm'
      header={<Header opened={opened} setOpened={setOpened} />}
      navbar={<Sidebar opened={opened} />}
    >
      <Outlet />
    </AppShell>
  )
}
