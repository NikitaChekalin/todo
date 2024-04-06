import { FC } from 'react'

import {
  ActionIcon,
  Burger,
  Header as UIHeader,
  MediaQuery,
  Title,
  useMantineColorScheme,
  useMantineTheme,
  Group,
} from '@mantine/core'

import { IconMoonStars, IconSun } from '@tabler/icons-react'

interface IProps {
  opened: boolean
  setOpened: (opened: boolean) => void
}

export const Header: FC<IProps> = ({ opened = true, setOpened }) => {
  const { toggleColorScheme } = useMantineColorScheme()
  const { colorScheme } = useMantineTheme()
  const darkTheme = colorScheme === 'dark'

  return (
    <UIHeader height={{ base: 50, md: 70 }} p='md'>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: '100%',
        }}
      >
        <MediaQuery largerThan='sm' styles={{ display: 'none' }}>
          <Burger opened={opened} onClick={() => setOpened(!opened)} size='sm' mr='xl' />
        </MediaQuery>

        <Title order={4} color={darkTheme ? 'white' : 'dark'}>
          Todo + Socket.io
        </Title>

        <Group align='center'>
          <ActionIcon
            variant='filled'
            color={darkTheme ? 'green' : 'dark'}
            onClick={() => toggleColorScheme()}
          >
            {darkTheme ? <IconSun size={18} /> : <IconMoonStars size={18} />}
          </ActionIcon>
        </Group>
      </div>
    </UIHeader>
  )
}
