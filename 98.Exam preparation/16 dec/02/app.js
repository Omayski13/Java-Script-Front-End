window.addEventListener("load", solve);

function solve() {
    let formElement = document.querySelector("form");
    const inputExpense = document.getElementById('expense');
    const inputAmount = document.getElementById('amount');
    const inputDate = document.getElementById('date');
    const addbutton = document.getElementById('add-btn');
    addbutton.addEventListener('click', publish);
    const deleteButton = document.querySelector('.delete')
    


    function publish(){

        if (inputAmount.value === '' || inputExpense.value == '' || inputDate ===''){
            return;
        }

        let previewList = document.getElementById('preview-list')
        let expensesList = document.getElementById('expenses-list')

        let LiElementExpenseItems = document.createElement('li')
        LiElementExpenseItems.classList.add('expenses-item')

        let ArticleElement = document.createElement('article')
        
        let createExpensesPara = document.createElement('p')
        createExpensesPara.textContent = `Type: ${inputExpense.value}`
        let expenseText = inputExpense.value

        let createAmountPara = document.createElement('p')
        createAmountPara.textContent = `Amount: ${inputAmount.value}$`
        let amountText = inputAmount.value

        let createDatePara = document.createElement('p')
        createDatePara.textContent = `Date: ${inputDate.value}`
        let dataText = inputDate.value

        let buttonsDiv = document.createElement('div')
        buttonsDiv.classList.add('buttons')
        
        let editButton = document.createElement('button')
        editButton.classList.add('btn','edit')
        editButton.textContent = 'edit'
        editButton.addEventListener('click',edit)

        let okButton = document.createElement('button')
        okButton.classList.add('btn','ok')
        okButton.textContent = 'ok'
        okButton.addEventListener('click',okClicled)

        buttonsDiv.appendChild(editButton)
        buttonsDiv.appendChild(okButton)

        previewList.appendChild(LiElementExpenseItems)

        previewList.appendChild(buttonsDiv)


        LiElementExpenseItems.appendChild(ArticleElement)
        ArticleElement.appendChild(createExpensesPara)
        ArticleElement.appendChild(createAmountPara)
        ArticleElement.appendChild(createDatePara)

        formElement.reset();
        addbutton.disabled=true;

        function edit() {
            inputExpense.value = expenseText
            inputAmount.value = amountText
            inputDate.value = dataText
            previewList.removeChild(LiElementExpenseItems)
            previewList.removeChild(buttonsDiv)
            addbutton.disabled=false

        }

        function okClicled() {
            console.log('clicked')
            expensesList.appendChild(LiElementExpenseItems)
            previewList.removeChild(buttonsDiv)
            addbutton.disabled=false
            deleteButton.addEventListener('click', deleteClicled)

        }

        function deleteClicled(){
            location.reload()


        }       

    }

}