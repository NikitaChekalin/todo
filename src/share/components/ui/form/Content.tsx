import { Children } from '@share/@types'
import { Stack } from '@mantine/core'
import useStyles from './Form.styles'

export type ContentProps = Children

export const Content: React.FC<ContentProps> = ({ children }: ContentProps) => {
  const { classes } = useStyles()

  return (
    <Stack spacing='md' className={classes.content}>
      {children}
    </Stack>
  )
}
