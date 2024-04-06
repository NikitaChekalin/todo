import { Progress } from '@mantine/core'
import { TodoItem } from '@share/@types'
import { TableMenu } from '@share/components'

interface TodoListItemProps {
  item: TodoItem
  onEdit: (id: string | number) => void
  onDelete: (id: string) => void
}

export const TodoListItem = ({ item, onEdit, onDelete }: TodoListItemProps) => (
  <tr>
    <td>{item?._id || '-'}</td>
    <td>{item?.name || '-'}</td>
    <td>{item?.description || '-'}</td>
    <td>
      {item?.progress || 0}
      <Progress radius='xl' color='blue' animate value={Number(item?.progress)} />{' '}
    </td>
    <TableMenu
      title='Edit todo item'
      onEdit={() => onEdit(item?._id)}
      onDelete={() => onDelete(item?._id as string)}
    />
  </tr>
)
