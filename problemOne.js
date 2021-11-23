const basictOperations = (firstNumber, secondNumber, operator) => {
    const fakeConverter = 1
    let result;
    switch(operator) {
        case '+':
            result = (firstNumber * fakeConverter) + (secondNumber * fakeConverter)
            break;
        case '-':
            result = (firstNumber * fakeConverter) - (secondNumber * fakeConverter)
            break;
        case '*':
            result = (firstNumber * fakeConverter) * (secondNumber * fakeConverter)
            break;
        default:
            result = (firstNumber * fakeConverter) / (secondNumber * fakeConverter)
    }

    console.log(result)
}

basictOperations('-2', '2', '+')