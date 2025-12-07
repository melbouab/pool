function pyramid(str, num) {
    let t=""
    let sp=" ".repeat(str.length)
    for (let i = 1; i <= num; i++) {
       t+=sp.repeat(num-i)+str.repeat(2*i-1)
       if (i!==num)t+="\n"
        
    }
    return t
}
console.log(pyramid('aa', 5));
