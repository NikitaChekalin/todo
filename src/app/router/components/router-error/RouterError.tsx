import { isRouteErrorResponse, useRouteError } from 'react-router-dom'
import { createStyles, Title, Text, Container, Center, MantineTheme } from '@mantine/core'
import { FC } from 'react'

const useStyles = createStyles((theme: MantineTheme) => ({
  label: {
    textAlign: 'center',
    fontWeight: 900,
    fontSize: 220,
    lineHeight: 1,
    marginBottom: theme.spacing.xl,
    color: theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[2],

    [theme.fn.smallerThan('sm')]: {
      fontSize: 120,
    },
  },

  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    textAlign: 'center',
    fontWeight: 900,
    fontSize: 38,

    [theme.fn.smallerThan('sm')]: {
      fontSize: 32,
    },
  },

  description: {
    maxWidth: 500,
    margin: 'auto',
    marginTop: theme.spacing.xl,
    marginBottom: theme.spacing.xl,
  },
}))

export const RouterError: FC = () => {
  const { classes } = useStyles()
  const error = useRouteError()

  if (isRouteErrorResponse(error)) {
    return (
      <>
        <Title className={classes.title}>You have found a secret place.</Title>
        <Text color='dimmed' size='lg' align='center' className={classes.description}>
          {error.statusText}
        </Text>
      </>
    )
  }

  return (
    <Center sx={{ width: '100%', height: '100%' }} dir=''>
      <Container>
        <Title className={classes.title}>Oops! Page not found.</Title>
        <Text color='dimmed' size='lg' align='center' className={classes.description}>
          Sorry the route you are looking for does not exist.
        </Text>
      </Container>
    </Center>
  )
}
