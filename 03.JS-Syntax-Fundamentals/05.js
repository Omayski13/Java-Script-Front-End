let result = 0

function solve (num1,num2,operator){
    switch(operator){
        case '+':
            result = num1 + num2
            break;
        case '-':
            result = num1 - num2
            break;
        case '*':
            result = num1 * num2
            break;
        case '/':
            result = num1 / num2
            break;
        case '%':
            result = num1 % num2
            break;
        case '**':
            result = num1 ** num2
    }
    console.log(result)
}

solve(3, 5.5, '*')
solve(5, 6, '+')