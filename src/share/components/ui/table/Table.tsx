import { ScrollArea, Table, Text } from '@mantine/core'
import { useState } from 'react'

import { TableProps } from './table.interfaces'
import useStyles from './table.utils'

export const CustomTable = ({
  columns,
  children,
  minWidth = undefined,
  highlightOnHover = true,
  withBorder = false,
  withColumnBorders = false,
  striped = false,
  verticalSpacing = 'xs',
  horizontalSpacing = 'xs',
}: TableProps) => {
  const { classes, cx } = useStyles()
  const [scrolled, setScrolled] = useState(false)

  const renderContent = () => {
    if (!(children instanceof Array)) {
      return children
    }

    if (children instanceof Array && children.length > 0) {
      return children
    }

    return (
      <tr>
        <td align='center' colSpan={200} style={{ padding: '52px' }}>
          <Text component='span' size='xl' sx={{ width: '100%' }} weight='bold'>
            Nothing found...
          </Text>
        </td>
      </tr>
    )
  }

  return (
    <ScrollArea
      scrollbarSize={6}
      onScrollPositionChange={({ y }) => setScrolled(y !== 0)}
      style={{ overflow: 'visible' }}
    >
      <Table
        striped={striped}
        withBorder={withBorder}
        highlightOnHover={highlightOnHover}
        horizontalSpacing={horizontalSpacing}
        sx={{ minWidth: minWidth || 300 }}
        verticalSpacing={verticalSpacing}
        withColumnBorders={withColumnBorders}
      >
        <thead className={cx(classes.header, { [classes.scrolled]: scrolled })}>
          <tr>
            {columns.map((column, idx) => (
              <th
                key={column.key || idx}
                style={{ width: column.width, textAlign: column.position || 'left' }}
              >
                {column.title}
              </th>
            ))}
          </tr>
        </thead>
        <tbody style={{ maxHeight: '600px', overflow: 'scroll' }}>{renderContent()}</tbody>
      </Table>
    </ScrollArea>
  )
}
