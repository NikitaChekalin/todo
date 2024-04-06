import { Stack } from '@mantine/core'

import useStyles from './Form.styles'

interface Content {
  children: React.ReactNode
}

export const Content = ({ children }: Content) => {
  const { classes } = useStyles()

  return (
    <Stack spacing='md' className={classes.content}>
      {children}
    </Stack>
  )
}
