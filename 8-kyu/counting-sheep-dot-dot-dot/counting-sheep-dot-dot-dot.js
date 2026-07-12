const countSheeps = sheep => {
    let total = 0;
    for(let char of sheep){
        if(char === true){
            total += 1
        }
    }
    return total;
}