/****main variables ****/
// the submit button
let btn = document.getElementById('button');
// score
let score = document.querySelector('.result .score');
// Main function to check the correct answer
let check =  () => {
    /****variables in the function scope****/ 

    // question class (div)
    let questions = document.querySelectorAll(".question");
    // the variable that will record the number of correct answers
    let ans = 0;
    
    // looping through the divs of class question 
    for(let i = 0; i < questions.length; i++){
        // tha radio inputs of one question
        let answers = questions[i].querySelectorAll(`input[name=question${i+1}]`);

        // looping through the radio inputs
        answers.forEach(answer => {
            
            if(answer.value == 'c'){
                answer.parentElement.style.backgroundColor = "rgb(155, 247, 51)";
                answer.parentElement.style.color = "#fff";
            }
            // if the input is cheked and its value is c then add one to ans variable 
            // where a correct answer was just indicated
            if(answer.checked && answer.value == 'c'){
                ans++;
            }else if(answer.checked){
                answer.parentElement.style.backgroundColor = "red";
                answer.parentElement.style.color = "#fff";
            }
            answer.disabled = true;
        });
    }

    score.innerHTML = ans;
    score.scrollIntoView({behavior:'smooth'});
}

btn.onclick = check;



//tutorial answer

/**let check =  () => {
    let q1 = document.quiz.question1.value;
    let q2 = document.quiz.question2.value;
    let q3 = document.quiz.question2.value;
    let q4 = document.quiz.question2.value;
    let q5 = document.quiz.question2.value;

    let ans = 0;
    if (q1 == "Cairo"){
        ans++;
    }
    if(q2== "4"){
        ans++;
    }

    if(q3== "4"){
        ans++;
    }

    if(q4== "4"){
        ans++;
    }

    if(q5== "4"){
        ans++;
    }

    document.querySelector(".ans").innerHTML = ans;
}

let btn = document.getElementById('button');
btn.onclick = check; */