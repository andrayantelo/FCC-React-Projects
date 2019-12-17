const replaceDoubleMinus = (expression) => {
    let regExp = /--/;
    return expression.replace(regExp, "+");
}

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
    expression = replaceDoubleMinus(expression.join(''));
    return eval(expression)
} 

export const hasLeadingZeros = (num) => {
//^0[0-9].*$
// num is string

    let regExp = /^0[0-9].*$/;
    console.log(regExp.test(num))
    return regExp.test(num)
}