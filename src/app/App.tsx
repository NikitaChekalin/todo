import { FC, useCallback, useMemo } from 'react'
import { ColorScheme, ColorSchemeProvider, MantineProvider } from '@mantine/core'
import { useLocalStorage } from '@mantine/hooks'
import { ModalsProvider } from '@mantine/modals'
import { Notifications } from '@mantine/notifications'
import { NavigationProgress } from '@mantine/nprogress'
import { QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

import { themeConfig } from '../share/constants/mantine-theme'
import { queryClient } from '../share/helpers/queryClient'

import { Router } from './router/Router'

import './App.css'

export const App: FC = () => {
  const [colorScheme, setColorScheme] = useLocalStorage<ColorScheme>({
    key: 'color-scheme',
    defaultValue: 'dark',
    getInitialValueInEffect: true,
  })
  const theme = useMemo(() => themeConfig(colorScheme), [colorScheme])

  const toggleColorScheme = useCallback(
    (value?: ColorScheme) => {
      const toggledColorScheme = colorScheme === 'dark' ? 'light' : 'dark'

      setColorScheme(value ?? toggledColorScheme)
    },
    [colorScheme, setColorScheme],
  )
  return (
    <QueryClientProvider client={queryClient}>
      <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
        <MantineProvider withNormalizeCSS withGlobalStyles theme={theme}>
          <ModalsProvider>
            <NavigationProgress />
            <Notifications position='top-right' zIndex={100} limit={5} autoClose={2000} />
            <ReactQueryDevtools position='bottom-right' />
            <Router />
          </ModalsProvider>
        </MantineProvider>
      </ColorSchemeProvider>
    </QueryClientProvider>
  )
}
