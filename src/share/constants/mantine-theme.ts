import { AppShellProps, ColorScheme, MantineTheme, MantineThemeOverride } from '@mantine/core'

export const themeConfig = (colorScheme: ColorScheme): Partial<MantineThemeOverride> => ({
  colors: {
    lightGreen: [
      '#f8f8f9',
      '#f2f2f2',
      '#dcdbe1',
      '#9694a1',
      '#464352',
      '#343141',
      '#252233',
      '#181623',
      '#c4fd91',
    ],
    darkGreen: [
      '#284539',
      '#eaeceb',
      '#d4dad7',
      '#a9b5b0',
      '#93a29c',
      '#7e8f88',
      '#697d74',
      '#536a61',
      '#3e584d',
      '#284539',
    ],
    black: [
      '#f8f8f9',
      '#f2f2f2',
      '#dcdbe1',
      '#9694a1',
      '#464352',
      '#343141',
      '#252233',
      '#181623',
      '#000',
    ],
  },
  primaryColor: 'darkGreen',

  colorScheme,

  globalStyles: (theme) => ({
    '::-webkit-scrollbar': {
      width: '4px',
      height: '4px',
    },

    '::-webkit-scrollbar-thumb': {
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.gray[7] : theme.colors.gray[6],
      borderRadius: '2px',
    },
  }),
})

export const appShellConfig: AppShellProps['styles'] = (theme: MantineTheme) => ({
  main: {
    padding: 0,
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
    color: theme.colorScheme === 'dark' ? theme.colors.gray[4] : theme.colors.gray[9],
  },
})
