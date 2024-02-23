function solve (argument){

let result = 0

    if (typeof argument === 'number'){
        result = Math.PI * argument * argument
        console.log(result.toFixed(2))

    }else{console.log(`We can not calculate the circle area, because we receive a ${typeof argument}.`)}
}

solve(5)
solve('name')
