import { Group, Box, UnstyledButton } from '@mantine/core'

import { Link } from 'react-router-dom'
import { useStyles } from './LinksGroup.styles'

interface LinksGroupProps {
  label: string
  initiallyOpened?: boolean
  links?: { label: string; link: string }
  link: string
}

export function LinksGroup({ label, link }: LinksGroupProps) {
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
