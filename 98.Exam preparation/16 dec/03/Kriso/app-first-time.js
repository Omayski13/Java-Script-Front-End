const baseUrl = 'http://localhost:3030/jsonstore/tasks/';


const LoadMealsButton = document.getElementById('load-meals')
const mealListElement = document.getElementById('list')

const addButtonElement = document.getElementById('add-meal')
const editButtonElement = document.getElementById('edit-meal')

const inputFoodElement = document.getElementById('food')
const inputTimeElement = document.getElementById('time')
const inputCaloriesElement = document.getElementById('calories')

let currentMealId = null



editButtonElement.addEventListener('click', async () =>{
    const food = inputFoodElement.value
    const time = inputTimeElement.value
    const calories = inputCaloriesElement.value

    const response = await fetch(`${baseUrl}/${currentMealId}`,{
        method: 'PUT',
        headers: {
            'content-type': 'application/json',
        },
        body: JSON.stringify({
            _id:currentMealId,
            food: food,
            time: time, 
            calories: calories 
        })
    })
    if (!response.ok) {
        return;
    }

    editButtonElement.disabled=true

    addButtonElement.disabled=false

    currentMealId = null

    inputFoodElement.value = '';
    inputTimeElement.value = '';
    inputCaloriesElement.value = '';


    loadMeals()




})

const loadMeals = async () => {
    const response = await fetch(baseUrl);
    const data = await response.json();

    mealListElement.innerHTML = ''

    for (const meal of Object.values(data)) {
        const changeButton = document.createElement('button')
        changeButton.classList.add('change-meal')
        changeButton.textContent= 'Change'

        const deleteButton = document.createElement('button')
        deleteButton.classList.add('delete-meal')
        deleteButton.textContent = 'Delete'

        const mealButtonsDiv = document.createElement('div')
        mealButtonsDiv.id = 'meal-buttons'
        mealButtonsDiv.appendChild(changeButton)
        mealButtonsDiv.appendChild(deleteButton)

        const mealH2Element = document.createElement('h2')
        mealH2Element.textContent = meal.food

        const timeH3Element = document.createElement('h3')
        timeH3Element.textContent = meal.time

        const caloriesH3Element = document.createElement('h3')
        caloriesH3Element.textContent = meal.calories

        const mealDiv = document.createElement('div')
        mealDiv.classList.add('meal')
        mealDiv.appendChild(mealH2Element)
        mealDiv.appendChild(timeH3Element)
        mealDiv.appendChild(caloriesH3Element)
        mealDiv.appendChild(mealButtonsDiv)

        
        mealListElement.appendChild(mealDiv)

        deleteButton.addEventListener('click', async () => {
            const response = await fetch(`${baseUrl}/${meal._id}`, {
                method:'DELETE'
            });
            
            mealDiv.remove();

        })

        changeButton.addEventListener('click', () =>{

            currentMealId = meal._id

            inputFoodElement.value = meal.food;
            inputTimeElement.value = meal.time;
            inputCaloriesElement.value = meal.calories;

            addButtonElement.disabled = true

            editButtonElement.disabled = false

            mealDiv.remove()


        })
        
        
    }
}


LoadMealsButton.addEventListener('click', loadMeals)
addButtonElement.addEventListener('click', async () =>{
const food = inputFoodElement.value
const time = inputTimeElement.value
const calories = inputCaloriesElement.value

const response = await fetch (baseUrl, {
    method: 'POST',
    headers: {
        'content-type': 'application/json',
    },
    body: JSON.stringify({food, time, calories})
    })


    if (!response.ok){
        return;
    }

    await loadMeals();

    inputFoodElement.value = '';
    inputTimeElement.value = '';
    inputCaloriesElement.value = '';

})


