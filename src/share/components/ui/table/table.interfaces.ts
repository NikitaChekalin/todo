import { MantineSize } from '@mantine/core'
import { ReactNode } from 'react'

export interface TableColumn {
  title: string
  width?: string | number
  position?: 'left' | 'right' | 'center'
  key?: string
}

export interface TableProps {
  columns: Array<TableColumn>
  children: ReactNode | Array<ReactNode>
  height?: number | string
  minWidth?: number | string
  highlightOnHover?: boolean
  withBorder?: boolean
  withColumnBorders?: boolean
  striped?: boolean
  verticalSpacing?: number | MantineSize
  horizontalSpacing?: number | MantineSize
}
