export const calculate = (expression) => {
    /*console.log(expression);
    const parsed = expression.map((symbol, index) => {
        if (isNaN(symbol)) {
            return symbol
        }
        else {
            return parseFloat(symbol)
        }
    })
    console.log(parsed);
    */
   return eval(expression.join(''))
} 

export const hasLeadingZeros = (num) => {
//^0[0-9].*$
// num is string

    let regExp = /^0[0-9].*$/;
    console.log(regExp.test(num))
    return regExp.test(num)
}