interface Form extends React.FormHTMLAttributes<HTMLFormElement> {
  onSubmit: () => void
}

export const Root = ({ children, onSubmit, ...rest }: Form) => (
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
