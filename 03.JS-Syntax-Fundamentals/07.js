function solve(day,age){

    let result = 0

    if (day === 'Weekday'){
        if (0 < age && age <= 18){
            result = '12$'
        }else if(age > 18 && age <= 64){
            result = '18$'
        }else if(age > 64 && age < 123){
            result ='12$'
        }else {result = 'Error!'}

    }else if(day ==='Weekend'){
        if (0 < age && age <= 18){
            result = '15$'
        }else if(age > 18 && age <= 64){
            result = '20$'
        }else if(age > 64 && age < 123){
            result ='15$'
        }else {result = 'Error!'}

    }else if (day ==='Holiday'){
        if (0 < age && age <= 18){
            result = '5$'
        }else if(age > 18 && age <= 64){
            result = '12$'
        }else if(age > 64 && age < 123){
            result ='10$'
        }else {result = 'Error!'} 
    }
    
    console.log(result)
}


solve('Weekday', 
42
)

solve('Holiday', -12)
solve('Holiday', 15)
