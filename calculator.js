const calculator = (num1, num2, operation) => {
    if(typeof num1 !== 'number'|| typeof num2 !== 'number') {
        throw new Error('Only numbers allowed')}
    firstNum = parseFloat(num1)
    secondNum = parseFloat(num2)
    switch (operation) {
        case "add":
            return firstNum + secondNum
            break;
        case "substract":
            return firstNum - secondNum
            break;
        case "multiply":
            return firstNum * secondNum
            break;
        case "divide":
            if(secondNum === 0) {
                throw new Error('you can not divide by zero')}
            return firstNum / secondNum
            break;
        default:
            console.log('something went wrong')
    }
}

module.exports = calculator;