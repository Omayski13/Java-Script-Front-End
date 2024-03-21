function phoneBook(array){

    let phoneBook = {}

    for (const info of array) {
        let [name, telephone] = info.split(" ")
        phoneBook[name] = telephone
    }

    for (const entry of Object.entries(phoneBook)) {
        console.log(`${entry[0]} -> ${entry[1]}`)
        
    }

}

phoneBook(['Tim 0834212554',
'Peter 0877547887',
'Bill 0896543112',
'Tim 0876566344']
)
phoneBook(['George 0552554',
'Peter 087587',
'George 0453112',
'Bill 0845344']
)