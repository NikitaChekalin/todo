import { Controller } from 'react-hook-form'
import { TextInput } from '@mantine/core'
import { TodoItem } from '@share/@types'
import { Button, Form } from '@share/components'
import { allowOnlyNumbers } from '@share/utils'

import { useTodoForm } from '../hook/useTodoForm'

interface TodoItemFormProps {
  defaultValues?: TodoItem
}

export const TodoItemForm = ({ defaultValues }: TodoItemFormProps) => {
  const { control, isDirty, onSubmit, handleSubmit, errors } = useTodoForm(defaultValues)

  return (
    <Form.Root onSubmit={handleSubmit(onSubmit)}>
      <Form.Content>
        <Controller
          control={control}
          name='_id'
          render={({ field }) => (
            <TextInput
              {...field}
              withAsterisk
              label='ID'
              type='number'
              onKeyDown={allowOnlyNumbers}
              onWheel={(e) => e.currentTarget.blur()}
              placeholder='Enter unique id'
              error={errors._id?.message}
            />
          )}
        />
        <Controller
          control={control}
          name='name'
          render={({ field }) => (
            <TextInput
              {...field}
              withAsterisk
              label='Name'
              placeholder='Todo item name'
              error={errors.name?.message}
            />
          )}
        />

        <Controller
          control={control}
          name='description'
          render={({ field }) => (
            <TextInput
              {...field}
              withAsterisk
              label='Description'
              placeholder='Todo item description'
              error={errors.description?.message}
            />
          )}
        />

        <Controller
          control={control}
          name='progress'
          render={({ field }) => (
            <TextInput
              {...field}
              withAsterisk
              label='Progress'
              type='number'
              onKeyDown={allowOnlyNumbers}
              onWheel={(e) => e.currentTarget.blur()}
              placeholder='Todo item progress'
              error={errors.progress?.message}
            />
          )}
        />

        <Button disabled={!isDirty}>
          {defaultValues?._id ? 'Save changes' : 'Create new todo item'}
        </Button>
      </Form.Content>
    </Form.Root>
  )
}
