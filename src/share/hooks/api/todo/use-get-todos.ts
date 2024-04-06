import { API_TAGS } from '@share/constants'
import { getTodosRequest } from '@share/services'
import { useQuery } from '@tanstack/react-query'

export const useGetTodos = () =>
  useQuery({
    queryKey: [API_TAGS.todo],
    queryFn: () => getTodosRequest(),
  })
