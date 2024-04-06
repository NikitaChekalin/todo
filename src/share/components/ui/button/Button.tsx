import { Button as MantineButton } from '@mantine/core'

interface ButtonProps {
  children: React.ReactNode
  disabled?: boolean
  type?: 'button' | 'submit' | 'reset'
  color?: 'pink' | 'green' | 'gray'
  variant?: 'light' | 'outline'
  style?: React.CSSProperties
}

export const Button = ({
  children,
  disabled,
  type = 'submit',
  color = 'pink',
  variant,
  style,
  ...props
}: ButtonProps) => (
  <MantineButton
    disabled={disabled}
    type={type}
    color={color}
    variant={variant}
    style={{ maxWidth: '170px', ...style }}
    {...props}
  >
    {children}
  </MantineButton>
)
