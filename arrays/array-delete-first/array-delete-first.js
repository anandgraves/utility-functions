function arrayDeleteFirst(value) {
  if (!Array.isArray(value)) {
    throw new TypeError('arrayDeleteFirst(): argument is not an Array.')
  }
  return value.slice(1)
}

export default arrayDeleteFirst