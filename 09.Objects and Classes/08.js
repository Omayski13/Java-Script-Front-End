function catsInfo(array){
    let cats = []

    class Cat {
        constructor(name,age){
            this.name = name
            this.age = age
        }

        meow(){
            console.log(`${this.name}, age ${this.age} says Meow`)
        }
    }

    for (const info of array) {
        let [name,age] = info.split(" ")
        cats.push(new Cat(name,age))
    }


    for (const cat of cats) {
        cat.meow()
    }
}

catsInfo(['Mellow 2', 'Tom 5'])
// catsInfo(['Candy 1', 'Poppy 3', 'Nyx 2'])