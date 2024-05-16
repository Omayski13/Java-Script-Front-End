function solve(input){
    let secretCrypto = String(input.splice(0,1))
    for (const action of input) {
        if (action === 'TakeEven'){
            cryptoProject = '';

            for (let i = 0; i < secretCrypto.length; i++) {
                if (i % 2 == 0) {
                    cryptoProject += secretCrypto[i];               
                }            
            }
            secretCrypto = cryptoProject;
            console.log(secretCrypto);
            }

        else if (action === 'Buy'){
            console.log(`The cryptocurrency is: ${secretCrypto}`)
        }

        else{
            splittedAction = action.split('?')
            if (splittedAction[0] === 'ChangeAll'){
                let substring = splittedAction[1]
                let replacement = splittedAction[2]
                if (secretCrypto.includes(substring)){
                    while(secretCrypto.includes(substring)){
                        secretCrypto = secretCrypto.replace(substring,replacement)
                    }
                console.log(secretCrypto)
                }


            }  

            if (splittedAction[0] === 'Reverse'){
                let substring = splittedAction[1]
                if (secretCrypto.includes(substring)){
                    secretCrypto = secretCrypto.replace(substring,'')
                    let reversed = substring.split("").reverse().join("");
                    secretCrypto = secretCrypto + reversed;
                    console.log(secretCrypto)
                } else{console.log('error')}

            }
        }
    }
}


solve((["z2tdsfndoctsB6z7tjc8ojzdngzhtjsyVjek!snfzsafhscs", 
"TakeEven",
"Reverse?!nzahc",
"ChangeAll?m?g",
"Reverse?adshk",
"ChangeAll?z?i",
"Buy"])
)