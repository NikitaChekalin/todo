import { ActionIcon, Menu } from '@mantine/core'
import { IconDots, IconEdit, IconTrashX } from '@tabler/icons-react'

interface TableMenu {
  title: string
  onEdit: () => void
  onDelete: () => void
}

export const TableMenu = ({ onEdit, onDelete, title }: TableMenu) => (
  <td align='left'>
    <Menu withArrow arrowPosition='center' position='top-start' trigger='hover' shadow='md'>
      <Menu.Target>
        <ActionIcon>
          <IconDots />
        </ActionIcon>
      </Menu.Target>

      <Menu.Dropdown>
        <Menu.Label>Actions</Menu.Label>

        <Menu.Item icon={<IconEdit />} onClick={onEdit}>
          {title}
        </Menu.Item>

        <Menu.Divider />

        <Menu.Item color='red' icon={<IconTrashX />} onClick={onDelete}>
          Delete
        </Menu.Item>
      </Menu.Dropdown>
    </Menu>
  </td>
)
