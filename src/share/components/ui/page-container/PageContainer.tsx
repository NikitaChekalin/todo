import React from 'react'
import { Box, Button, LoadingOverlay, Paper, Stack, Text, Title } from '@mantine/core'
import { IconBug, IconReload } from '@tabler/icons-react'

interface PageContainer {
  isLoading?: boolean
  errorStatus?: number | null
  children: React.ReactNode | Array<React.ReactNode>
}

export const PageContainer = ({
  children,
  isLoading = false,
  errorStatus = null,
}: PageContainer) => {
  const renderTitle = () => {
    switch (errorStatus) {
      case 500:
        return 'Server Error'
      default:
        return `Error ${errorStatus}`
    }
  }

  const renderMessage = () => {
    if (errorStatus === 500)
      return 'We apologize but something went really wrong. Try to reload the page'

    return ''
  }

  const renderControl = () => (
    <Button color='gray' leftIcon={<IconReload />} onClick={() => window.location.reload()}>
      Reload Page
    </Button>
  )

  const renderErrorLayout = () => (
    <Stack
      align='center'
      justify='center'
      sx={(theme) => ({ height: `calc(100vh - ${Number(theme.spacing.md) * 2}px)` })}
    >
      <Paper
        radius='lg'
        sx={(theme) => ({
          background: theme.colors.pink[3],
        })}
      >
        <Stack align='center' justify='center' p='xl' spacing='sm'>
          <IconBug color='#343a40' height={128} width={128} />
          <Title color='dark' order={3}>
            {renderTitle()}
          </Title>
          <Text color='dark'>{renderMessage()}</Text>
          {renderControl()}
        </Stack>
      </Paper>
    </Stack>
  )

  return (
    <>
      {isLoading ? (
        <LoadingOverlay overlayBlur={1} visible={isLoading} />
      ) : (
        <Box>{errorStatus === 500 ? renderErrorLayout() : children}</Box>
      )}
    </>
  )
}
