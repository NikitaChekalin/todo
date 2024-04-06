import { createTodoItemRequest } from '@share/services'
import { useMutation } from '@tanstack/react-query'

export const useCreateTodoItem = () => useMutation(createTodoItemRequest)
