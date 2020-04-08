const CheckBoundaries = (Min, Max, Value) => (
  Value < Min ? Min
    : Value > Max ? Max
      : Value
)

const parseArgAsInt = (arg) => {
  if (!arg) {
    console.error('Set needs a value')
    return null
  }
  const intValue = parseInt(arg, 10)
  if (!intValue) {
    console.error('Value needs te be a integer')
    return null
  }
  return intValue
}

module.exports = { CheckBoundaries }