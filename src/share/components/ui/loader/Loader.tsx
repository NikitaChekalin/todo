import { FC } from 'react'
import { Center, Loader as MantineLoader } from '@mantine/core'

interface IProps {
  fullScreen?: boolean
}

export const Loader: FC<IProps> = ({ fullScreen = false }) => (
  <Center w={`100${fullScreen ? 'vw' : '%'}`} h={`100${fullScreen ? 'vh' : '%'}`}>
    <MantineLoader color='green' />
  </Center>
)
