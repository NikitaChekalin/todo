import { TodoItem } from '@share/@types'
import { API_LIST } from '@share/constants'
import { post } from '@share/helpers'

export const createTodoItemRequest = async (todo: TodoItem) => {
  const { data } = await post<TodoItem>(API_LIST.todos.root, todo)

  return data
}
