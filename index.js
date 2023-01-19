const zip = (first, second) => {
  if (first.length === 0) {
    return second
  }

  if (second.length === 0) {
    return first
  }

  const [firstItem, ...remainingFirstItems] = first
  const [secondItem, ...remainingSecondItems] = second

  return [firstItem, secondItem, ...zip(remainingFirstItems, remainingSecondItems)]
}

const isEmpty = string => string.trim().length === 0

const trimFirst = (strings) => {
  if (strings.length === 0) {
    return []
  }

  if (isEmpty(strings[0])) {
    return strings.slice(1)
  }

  return strings
}

const trimLast = (strings) => {
  if (strings.length === 0) {
    return []
  }

  if (isEmpty(strings.at(-1))) {
    return strings.slice(0, -1)
  }

  return strings
}

const startingWhitespaceLength = string => {
  return string.length - string.trimStart().length
}

const getMinimumWhitespace = lines => lines.reduce((previousMinimumWhitespaceLength, line) => {
  if (isEmpty(line)) {
    return previousMinimumWhitespaceLength
  }

  if (previousMinimumWhitespaceLength === 0) {
    return startingWhitespaceLength(line)
  }

  const lineStartingWhitespaceLength = startingWhitespaceLength(line)

  if (lineStartingWhitespaceLength < previousMinimumWhitespaceLength) {
    return lineStartingWhitespaceLength
  }

  return previousMinimumWhitespaceLength
}, 0)

export const indented = (staticStrings, ...variableStrings) => {
  const strings = zip(staticStrings, variableStrings)
  const string = strings.join("")
  const lines = trimLast(trimFirst(string.split("\n")))

  const minimumWhitespaceLength = getMinimumWhitespace(lines)

  return lines.map(line => {
    return line.slice(minimumWhitespaceLength)
  }).join("\n")
}
