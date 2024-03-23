function films(array){
    let movies = []

    for (const data of array) {
        let splittedData = data.split(" ")
        if (splittedData[0] =="addMovie"){
            let movieName = splittedData.slice(1).join(" ")
            movies.push({
                'name': movieName
            })
        } else {
            if (data.includes('directedBy')){
                let[movieName,director] = data.split(' directedBy ')
                for (const movie of movies) {
                    if (movie['name'] === movieName){
                        movie['director'] = director
                    }   
                }
            } else {
                let[movieName,date] = data.split(' onDate ')
                for (const movie of movies) {
                    if (movie['name'] === movieName){
                        movie['date'] = date
            }
    
                    }
                }
        } 
    }
    let moviesToPrint = []
    for (const movie of movies) {
        if (movie.hasOwnProperty('name') && movie.hasOwnProperty('director') && movie.hasOwnProperty('date')){
            moviesToPrint.push(movie)
            // let movieToPrint = movie.stringify()
            console.log(JSON.stringify(movie))
        }
        
    }


}



films([
    'addMovie The Avengers',
    'addMovie Superman',
    'The Avengers directedBy Anthony Russo',
    'The Avengers onDate 30.07.2010',
    'Captain America onDate 30.07.2010',
    'Captain America directedBy Joe Russo'
    ]
    )