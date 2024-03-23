function townInfo(array){
    towns = []
    for (const data of array) {
        let [townName,latitude,longitude] = data.split(" | ")

        towns.push({
            town: townName,
            latitude: Number(latitude).toFixed(2),
            longitude: Number(longitude).toFixed(2)
        })
        
    }
    for (const town of towns) {
        console.log(town)
    }   
}


townInfo(['Sofia | 42.696552 | 23.32601',
'Beijing | 39.913818 | 116.363625']
)