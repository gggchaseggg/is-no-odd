export const isNoOdd = (number) => {
    if (typeof number === 'string') {
        return parseInt(number) % 2 === 0
    }
    if (typeof number === 'number') {
        return number % 2 === 0
    }
    const parseNumber = parseInt(number.toString())
    return Number.isNaN(parseNumber) ? parseNumber % 2 === 0 : false
}
