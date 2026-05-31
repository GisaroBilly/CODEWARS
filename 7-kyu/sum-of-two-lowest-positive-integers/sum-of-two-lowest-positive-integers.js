const sumTwoSmallestNumbers = numbers => {
    const num = [...numbers].sort((a,b) => a-b)
    return num[1] + num[0]
}