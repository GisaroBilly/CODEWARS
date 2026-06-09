const findOdd = A => {
const unique = A.filter(char => {
    const neww = A.filter(num => num === char).length
    return neww % 2 !== 0
});
return unique[0]
}