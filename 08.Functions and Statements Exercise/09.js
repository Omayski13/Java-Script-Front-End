function loading(num){
    let bar = Array(10).fill('.')
    bar.fill("%",0,num / 10)

    if (num === 100){
        console.log(`100% Complete!\n[%%%%%%%%%%]`)
    } else{
        console.log(`${num}% [${bar.join("")}]\nStill loading...`)
    }  
}

loading(30)
loading(50)
loading(100)