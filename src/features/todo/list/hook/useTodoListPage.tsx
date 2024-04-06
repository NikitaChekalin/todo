import { ROUTER_BOOK } from '@app/router/routerBook'
import { useDeleteTodoItemById } from '@share/hooks/api'
import { useNavigate } from 'react-router-dom'

const tableColumns = [
  { title: 'ID', key: 'id', width: '15%' },
  { title: 'Name', key: 'name', width: '35%' },
  { title: 'Description', key: 'description' },
  { title: 'Progress', key: 'progress' },
  { title: '', width: 28 },
]

export const useTodoListPage = () => {
  const navigate = useNavigate()
  const { mutateAsync: deleteTodoItem } = useDeleteTodoItemById()

  const onDelete = (id: string) => deleteTodoItem(id)
  const onCreate = () => navigate(ROUTER_BOOK.TODO.CREATE)
  const onEdit = (id: string) => navigate(`${ROUTER_BOOK.TODO.INDEX}/${id}`)

  return { tableColumns, onCreate, onEdit, onDelete }
}
