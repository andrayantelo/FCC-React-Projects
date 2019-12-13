export const calculate = (expression) => {
    console.log("let's calculate");
    
    let m = /([0-9]+\*[0-9]+)/g;
    let d = /([0-9]+\/[0-9]+)/g;
    let a = /([0-9]+\+[0-9]+)/g;
    let s = /([0-9]+-[0-9]+)/g;
    
    let multiply = expression.match(m);
    if (multiply.length) {
        console.log('we have multiplication');
        for (let exp in multiply) {
            let result = exp.split('*').reduce((a, b) => {
                console.log(a, b);
                return a;
            });
            expression.replace(exp, result)
        }
    }
    console.log(expression);

    let  divide = expression.match(d),
        add = expression.match(a),
        subtract = expression.match(s);

    

    console.log(multiply, divide, add, subtract);
}