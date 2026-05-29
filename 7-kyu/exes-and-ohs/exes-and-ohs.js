const XO = str => {
 const text = str.toLowerCase()
 const countX = text.split('x').length -1
 const countO = text.split('o').length -1
 return (countX === countO) ? true:false
} 