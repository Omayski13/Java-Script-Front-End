// function getEmployees(array){
//     employees = {}

//     for (const em of array) {
//         employees[em] = em.length
//     }


//     for (const data of Object.entries(employees)) {
//         let [name, number] = data
//         console.log(`Name: ${name} -- Personal Number: ${number}`)  
//     }
// }




function getEmployees(array){
    for (const em of array) {
        console.log(`Name: ${em} -- Personal Number: ${em.length}`)
    }
}

getEmployees([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
    ]
    )
getEmployees([
    'Samuel Jackson',
    'Will Smith',
    'Bruce Willis',
    'Tom Holland'
    ]
    )