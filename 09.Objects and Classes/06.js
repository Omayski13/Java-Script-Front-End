function meeting(array){
    let schedule = {}

    for (const info of array) {
        let [day,name] = info.split(" ")
        if (schedule.hasOwnProperty(day)){
            console.log(`Conflict on ${day}!`)
        } else {
            console.log(`Scheduled for ${day}`)
            schedule[day] = name
        }
    }

    for (const meeting of Object.entries(schedule)) {
        let [day,name] = meeting
        console.log(`${meeting[0]} -> ${meeting[1]} `)
    }
}


meeting(['Monday Peter',
'Wednesday Bill',
'Monday Tim',
'Friday Tim']
)
meeting(['Friday Bob',
'Saturday Ted',
'Monday Bill',
'Monday John',
'Wednesday George']
)