import { API_TAGS } from '@share/constants'
import { queryClient } from '@share/helpers'
import { deleteTodoItemByIdRequest } from '@share/services'
import { useMutation } from '@tanstack/react-query'

export const useDeleteTodoItemById = () =>
  useMutation({
    mutationFn: deleteTodoItemByIdRequest,
    onSuccess: () => {
      queryClient.invalidateQueries([API_TAGS.todo])
    },
  })
