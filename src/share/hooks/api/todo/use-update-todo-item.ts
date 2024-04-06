import { API_TAGS } from '@share/constants'
import { queryClient } from '@share/helpers'
import { useMutation } from '@tanstack/react-query'
import { updateTodoItemByIdRequest } from '@share/services'
import { TodoItem } from '@share/@types'

export const useUpdateTodoItemById = () =>
  useMutation({
    mutationFn: async (props: TodoItem) => {
      await updateTodoItemByIdRequest(props)

      return queryClient.invalidateQueries({
        queryKey: [API_TAGS.todo],
      })
    },
  })
