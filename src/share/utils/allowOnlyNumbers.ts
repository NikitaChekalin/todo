export const allowOnlyNumbers = (e: React.KeyboardEvent<HTMLInputElement>) => {
  if (['e', 'E', '+', '-'].includes(e.key)) {
    e.preventDefault()
  }
}
