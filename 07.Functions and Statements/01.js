function formatGrade(grade){
    let gradeWithWord = ''
    let flag = true
    if (grade < 3){
        gradeWithWord = "Fail"
        flag = false
        console.log("Fail (2)")
    }   else if (grade >= 3 && grade < 3.5){
        gradeWithWord ="Poor"
    }   else if (grade >= 3.5 && grade < 4.5){
        gradeWithWord ="Good"
    }   else if (grade >= 4.5 && grade < 5.5){
        gradeWithWord ="Very good"
    }   else if (grade >= 5.5 ){
        gradeWithWord = "Excellent"
    }
    if (flag){
    console.log(`${gradeWithWord} (${grade.toFixed(2)})`)
    }


}

formatGrade(3.33)
formatGrade(4.50)
formatGrade(2.99)