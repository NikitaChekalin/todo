import { ActionIcon } from '@mantine/core'
import { IconSquareRoundedChevronLeft } from '@tabler/icons-react'
import { useNavigate } from 'react-router-dom'

export const BackButton = () => {
  const navigate = useNavigate()

  const handleLinkClick = () => navigate(-1)

  return (
    <ActionIcon color='pink' title='Back' variant='filled' onClick={handleLinkClick}>
      <IconSquareRoundedChevronLeft size={24} />
    </ActionIcon>
  )
}
