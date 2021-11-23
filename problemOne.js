const basictOperations = (firstNumber, secondNumber, operator) => {
    //multiplying integers with strings in javascript is an hack to manually convert strings to integers
    //variable fakeConverter is used to multiply the imput string paramneters so the can be converted to integers
    //switch statements is used to identify passed operators and their corresponding actions
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