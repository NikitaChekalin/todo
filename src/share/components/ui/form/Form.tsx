type FormProps = React.FormHTMLAttributes<HTMLFormElement> & {
  onSubmit: () => void
}

export const Root = ({ children, onSubmit, ...rest }: FormProps) => (
  <form
    autoComplete='off'
    onSubmit={(e) => {
      e.preventDefault()
      onSubmit()
    }}
    {...rest}
  >
    {children}
  </form>
)
export * from './Content'
