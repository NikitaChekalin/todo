import { notifications } from '@mantine/notifications'
import { MutationCache, QueryCache, QueryClient } from '@tanstack/react-query'
import { isAxiosError } from 'axios'

const onError = (error: unknown) => {
  if (isAxiosError(error)) {
    const { response, code } = error

    const title = response?.status ?? code
    const message = response?.data?.message ?? error.message
    notifications.clean()
    notifications.show({
      color: 'red',
      title,
      message,
    })
  }
}

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: 0,
    },
    mutations: {
      retry: false,
    },
  },

  queryCache: new QueryCache({
    onError,
  }),

  mutationCache: new MutationCache({
    onError,
  }),
})
