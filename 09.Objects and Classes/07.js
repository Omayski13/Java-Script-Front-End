function sortAdressBook(array){
    let addressBook = {}

    for (const info of array) {
        let [name,adress] = info.split(":")
        addressBook[name] = adress
    }

    let keyValue = Object.entries(addressBook)

    keyValue.sort(([firstName], [secondName]) => firstName.localeCompare(secondName))
    const sortedAdressBook = Object.fromEntries(keyValue)

    for (const info of Object.entries(sortedAdressBook)) {
        let [name, adress] = info
        console.log(`${name} -> ${adress} `)     
    }

}

sortAdressBook(['Tim:Doe Crossing',
'Bill:Nelson Place',
'Peter:Carlyle Ave',
'Bill:Ornery Rd']
)
// sortAdressBook()
