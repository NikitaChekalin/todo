import { createStyles } from '@mantine/core'

export const useSidebarStyles = createStyles((theme) => ({
  header: {
    paddingBottom: theme.spacing.xs,
    marginBottom: theme.spacing.xs,
    borderBottom: `1px solid ${theme.colors.gray[2]}`,
    color: theme.colorScheme === 'dark' ? 'white' : 'dark',
  },

  links: {
    marginLeft: -theme.spacing.md,
    marginRight: -theme.spacing.md,
  },

  footer: {
    paddingTop: theme.spacing.xs,
    borderTop: `1px solid ${theme.colors.gray[8]}`,
  },

  link: {
    ...theme.fn.focusStyles(),
    display: 'flex',
    alignItems: 'center',
    textDecoration: 'none',
    fontSize: theme.fontSizes.sm,
    color: theme.colors.gray[7],
    padding: `${theme.spacing.xs}px ${theme.spacing.sm}px`,
    borderRadius: theme.radius.sm,
    fontWeight: 500,

    '&:hover': {
      backgroundColor: theme.colors.gray[0],
      color: theme.black,
    },
  },

  linkIcon: {
    color: theme.colors.gray[6],
    marginRight: theme.spacing.sm,
  },
}))
