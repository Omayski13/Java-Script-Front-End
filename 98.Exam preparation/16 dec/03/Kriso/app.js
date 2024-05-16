baseUrl = 'http://localhost:3030/jsonstore/tasks'

//input fiels
const foodInputElement = document.getElementById('food')
const timeInputElement = document.getElementById('time')
const caloriesInputElement = document.getElementById('calories')

//buttons
const loadMealsButton = document.getElementById('load-meals')
const addMealButton = document.getElementById('add-meal')
const editMealButton = document.getElementById('edit-meal')


//other

const divList = document.getElementById('list')

let currentMealId = ''


// functionalyty of the code




const loadMeals = async () => {
    const response = await fetch(baseUrl)
    const data = await response.json()

    divList.innerHTML = ''

    for (const meal of Object.values(data)) {

        



        // create change button
        const changeMealButton = document.createElement('button')
        changeMealButton.classList.add('change-meal')
        changeMealButton.textContent = 'Change'

        // create delete button
        const deleteMealButton = document.createElement('button')
        deleteMealButton.classList.add('delete-meal')
        deleteMealButton.textContent = 'Delete'

        // create div for buttons
        const divButtons = document.createElement('div')
        divButtons.id = 'meal-buttons'

        // attach buttons to div
        divButtons.appendChild(changeMealButton)
        divButtons.appendChild(deleteMealButton)

        // create h2 and h3 for food, time and calories
        const foodH2Element = document.createElement('h2')
        foodH2Element.textContent = meal.food

        const timeH3Element = document.createElement('h3')
        timeH3Element.textContent = meal.time

        const caloriesH3Element = document.createElement('h3')
        caloriesH3Element.textContent = meal.calories

        // create div with class meal

        const divMeal = document.createElement('div')
        divMeal.classList.add('meal')

        //atach h2,h3 and divbuttons to div meal

        divMeal.appendChild(foodH2Element)
        divMeal.appendChild(timeH3Element)
        divMeal.appendChild(caloriesH3Element)
        divMeal.appendChild(divButtons)

        //atach to main div

        divList.appendChild(divMeal)

        changeMealButton.addEventListener('click', () =>{

            currentMealId = meal._id
            foodInputElement.value = meal.food
            timeInputElement.value = meal.time
            caloriesInputElement.value = meal.calories

            addMealButton.disabled = true

            editMealButton.disabled = false

            divMeal.remove()

        })

        deleteMealButton.addEventListener('click', async () =>{
            const response = await fetch(`${baseUrl}/${meal._id}`,{
                method:'DELETE'
            })

            divMeal.remove();

        })
        
    }  

}





loadMealsButton.addEventListener('click', loadMeals)

addMealButton.addEventListener('click', async () => {
    const newMeal = getInputData();

    const response = await fetch(baseUrl,{
        method:'POST',
        headers: {'content-type': 'application/json'
        },
        body:JSON.stringify({newMeal})
    })

    if (!response.ok){
        return;
    }

    foodInputElement.value = ''
    timeInputElement.value = ''
    caloriesInputElement.value = ''

    await loadMeals()

    


})

editMealButton.addEventListener('click', async() => {
    const food = foodInputElement.value
    const time = timeInputElement.value
    const calories = caloriesInputElement.value


    const response = await fetch(`${baseUrl}/${currentMealId}`,{
        method:'PUT',
        headers:{
        'content-type': 'application/json'
        },
        body:
            JSON.stringify({
                _id: currentMealId,
                food: food,
                time: time,
                calories: calories
            })
        })
    if (!response){
        return;
        }

    editMealButton.disabled = true
    addMealButton.disabled = false
    currentMealId = null

    foodInputElement.value = ''
    timeInputElement.value = ''
    caloriesInputElement.value = ''

    loadMeals()


})

    caloriesInputElement.value = ''




function getInputData() {
    const food = foodInputElement.value;
    const time = timeInputElement.value;
    const calories = caloriesInputElement.value;
    
    return { food, time, calories };
}