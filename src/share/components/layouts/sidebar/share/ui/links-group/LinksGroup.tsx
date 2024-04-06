import { Link } from 'react-router-dom'
import { Box, Group, UnstyledButton } from '@mantine/core'

import { useStyles } from './LinksGroup.styles'

interface LinksGroup {
  label: string
  link: string
}

export const LinksGroup = ({ label, link }: LinksGroup) => {
  const { classes } = useStyles()

  return (
    <Link to={link} className={classes.link}>
      <UnstyledButton className={classes.control}>
        <Group position='apart' spacing={0}>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Box ml='md'>{label}</Box>
          </Box>
        </Group>
      </UnstyledButton>
    </Link>
  )
}
