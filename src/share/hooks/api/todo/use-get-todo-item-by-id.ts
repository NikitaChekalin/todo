import { API_TAGS } from '@share/constants'
import { getTodoItemByIdRequest } from '@share/services'
import { useQuery } from '@tanstack/react-query'

export const useGetTodoItemById = (id: string) =>
  useQuery({
    queryKey: [API_TAGS.todo, id],
    queryFn: () => getTodoItemByIdRequest(id),
    enabled: Boolean(id),
  })
