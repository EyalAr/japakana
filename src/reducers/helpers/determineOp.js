export default (nSelected, nTotal) => {
  if (nSelected <= nTotal / 2) return "union"
  return "subtract"
}
