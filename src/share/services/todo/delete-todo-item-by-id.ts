import { API_LIST } from '@share/constants'
import { destroy } from '@share/helpers'

export type TodoItemDeleteResponse = {
  success: boolean
}

export const deleteTodoItemByIdRequest = async (id: string) => {
  const { data } = await destroy<TodoItemDeleteResponse>(`${API_LIST.todos.root}/${id}`)

  return data
}
