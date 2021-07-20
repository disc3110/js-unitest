const stringLength = (string) => {
  if (string.length === 0 || string.length > 10){
    throw new Error('String must have between 1 to 10 characters')
  }
  return string.length
}

module.exports = stringLength