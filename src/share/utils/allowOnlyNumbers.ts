export const allowOnlyNumbers = (e: any) => {
  if (['e', 'E', '+', '-'].includes(e.key)) {
    e.preventDefault()
  }
}
