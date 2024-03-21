function cityInfo(obj){
    for (const entry of Object.entries(obj)) {
        const[key,value] = entry;
        console.log(`${key} -> ${value}`)
    }
}

cityInfo({
    name: "Plovdiv",
    area: 389,
    population: 1162358,
    country: "Bulgaria",
    postCode: "4000"
}
)