import { TodoListItem, useTodoListPage } from '@features/todo'
import { Button } from '@mantine/core'
import { CustomTable, PageContainer, PageHeader } from '@share/components'
import { useGetTodos, useSocketConnection } from '@share/hooks/api'
import { IconSquareRoundedPlus } from '@tabler/icons-react'

const TodoPageView = () => {
  const socketProgressData = useSocketConnection()
  const { data, isLoading, isFetching } = useGetTodos()
  const { tableColumns, onCreate, onEdit, onDelete } = useTodoListPage()

  const updatedDataWithSocket = data?.map((todoItem) => {
    if (todoItem._id === socketProgressData?._id) {
      return { ...todoItem, progress: socketProgressData.progress }
    }

    return todoItem
  })

  return (
    <PageContainer isLoading={isLoading || isFetching}>
      <PageHeader title='Todo'>
        <Button leftIcon={<IconSquareRoundedPlus />} color='pink' onClick={onCreate}>
          Add new todo item
        </Button>
      </PageHeader>

      <CustomTable columns={tableColumns}>
        {updatedDataWithSocket?.map((todoItem) => (
          <TodoListItem item={todoItem} key={todoItem._id} onDelete={onDelete} onEdit={onEdit} />
        ))}
      </CustomTable>
    </PageContainer>
  )
}

export default TodoPageView
