import { useMutation } from '@tanstack/react-query'
import { createTodoItemRequest } from '@share/services'

export const useCreateTodoItem = () => useMutation(createTodoItemRequest)
