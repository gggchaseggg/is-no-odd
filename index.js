export const isNoOdd = (number) => {
    if (typeof number === 'string') {
        return parseInt(number) % 2 === 0
    }
    return number % 2 === 0
}
