import { ReactNode } from 'react'
import { Group, Title } from '@mantine/core'
import { LAYOUT_SIZES } from '@share/constants'

import { BackButton } from '../back-button/BackButton'

interface PageHeader {
  title: string
  backButton?: true | false | 'confirm'
  children?: ReactNode | Array<ReactNode>
}

export const PageHeader = ({ title, backButton = false, children }: PageHeader) => (
  <Group
    noWrap
    align='center'
    mb='md'
    p='sm'
    position='apart'
    sx={(theme) => ({
      borderRadius: theme.radius.md,
      background: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.white,
      maxHeight: LAYOUT_SIZES.PAGE_HEADER_HEIGHT,
    })}
  >
    <Group noWrap align='center' spacing='xl'>
      {backButton && <BackButton />}
      <Title order={2}>{title}</Title>
    </Group>
    <Group noWrap spacing='xs'>
      {children}
    </Group>
  </Group>
)
