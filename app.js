const correctAnswers = ['B', 'B', 'B', 'B']; 
const form = document.querySelector('.quiz-form');
const result = document.querySelector('.result');

form.addEventListener('submit', e => {
    e.preventDefault();

    let score = 0;
    const userAnswers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value];

    //check answers 
    userAnswers.forEach((answer, index) => {
        if(answer === correctAnswers[index]) {
            score += 25;
        }
    });

     //console.log(score);
    //show result on page
    scrollTo(0,0) //scrola till toppen
    result.querySelector('span').textContent = `${score}%`;
    result.classList.remove('d-none');

    let output = 0;
    const timer = setInterval(() => {
        result.querySelector('span').textContent = `${output}%`;
        if(output === score){
            clearInterval(timer);
        } else {
            output++;
        }
    }, 10);
});

//window object (global object)

console.log('hello');
window.console.log('hello'); //this is the same but you dont have to type out windoew, it is inferred

//alert callbackfunction efter 3 sekunder
// setTimeout(() => {
// alert('hello');
// }, 3000);


//interval timer som fire callbackfunktion efter satt tid om och om igen till skillnad mot timeOut en gång
// setInterval(() => {
//     console.log('hello');
// }, 1000 );

// räkna upp score animering genom setInterval

