import { TodoItem } from '@share/@types'
import { API_LIST } from '@share/constants'
import { put } from '@share/helpers'

export type TodoItemUpdateResponse = TodoItem[]

export const updateTodoItemByIdRequest = async (todoItem: TodoItem) =>
  put<TodoItemUpdateResponse>(API_LIST.todos.root, todoItem)
