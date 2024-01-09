const correctAnswers =["D","C","A","B","C","A","D","A","C","C","D","A "];
const totalQue = correctAnswers.length;
const form = document.querySelector(".quiz-form");


const reload = document.querySelector(".reload");
const result = document.querySelector(".result");
const allQues = document.querySelectorAll(".question")



form.addEventListener("submit",event => {
    event.preventDefault();

    let score = 0;
    const userAnswers = [form.q1.value,form.q2.value,form.q3.value,form.q4.value,form.q5.value,form.q6.value,form.q7.value,form.q8.value,form.q9.value,form.q10.value,form.q11.value,form.q12.value];

    userAnswers.forEach((answer,index) => {

        if(answer === correctAnswers[index]){

        score +=1;
        allQues[index].classList.add("correct");

        }else{
            allQues[index].classList.add("wrong");

        }
    });

    // console.log(score);

    scrollTo(0,0);
    result.classList.remove("hide");
    result.querySelector("p").textContent = ` your score ${score}/${totalQue}`;


   

})
