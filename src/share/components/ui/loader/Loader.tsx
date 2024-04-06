import { FC } from 'react'
import { Center, Loader as MantineLoader } from '@mantine/core'

interface Loader {
  fullScreen?: boolean
}

export const Loader = ({ fullScreen = false }: Loader) => (
  <Center w={`100${fullScreen ? 'vw' : '%'}`} h={`100${fullScreen ? 'vh' : '%'}`}>
    <MantineLoader color='green' />
  </Center>
)
