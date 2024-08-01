const correctAnswers = ['B', 'A', 'B', 'B', 'A']; //The array of the correct answers
const form = document.querySelector('.quiz-form');
let button = document.getElementById('disabled');


let userAnswers = [];
const radios = document.querySelectorAll('input[type="radio"]');

//We want to check if user answer all the questions...
const checkAnswers = () => {
    /*empty the array because when we iterate we
     don't fill the array with every itearation values*/
    userAnswers = [];

    //fill the array with the checked answers  
    radios.forEach(radio => {
        if (radio.checked) { userAnswers.push(radio.value) }
    });

    // check if user has answerd all the question and enable the submit btn
    if (userAnswers.length === correctAnswers.length) {
        button.disabled = false;
    } else {
        button.disabled = true;
    }

}

//fire the check function to every input button
radios.forEach((radio) => {
    radio.addEventListener('change', checkAnswers);

});


form.addEventListener('submit', e => {
    e.preventDefault(); // the default is refresh page we don't want that
    let score = 0;

    /*Check if the User Answer is matching the Correct Answers,
    and increment the socre by 1 fraction every correct answer*/
    userAnswers.forEach((answer, index) => {
        if (answer === correctAnswers[index]) {
            score += (100 / correctAnswers.length);
        }
    })
    //ـــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــ
    scrollTo(0, 0); //Scroll to the top
    const result = document.querySelector('.result'); // The score board container
    result.classList.remove('d-none'); // To make to score board visible
    // Animate the score count...
    let output = 0; //to start with
    const timer = setInterval(() => {
        result.querySelector('span').textContent = `${output}%`; //injecting the animated score into the span element
        if (output === score) {
            clearInterval(timer);
        } else {
            output++;
        }
    }, 10)
})