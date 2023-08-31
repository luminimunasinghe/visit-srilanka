/* creating an array of numbers, questions, options, and answers*/
const quizData = [
	{
    question: "1.Which Majestic creature is considered the National animal of Sri Lanka?",
    correct: "a",
      a: "Elephant",
      b: "Leopard",
      c: "Lion",
      d: "Sloth bear",

	},
	{
    	question:"2.Which National park in Sri Lanka is famous for its Large population of wild Elephants? ",
		a: "Udawalawa National Park",
		b: "Yala National Park",
		c: "Minneriya National Park",
		d: "wilpattu National Park",
		correct:"a",
	},
	{
		question:"3.What is the Largest land Mammal found in Sri Lanka ?",
		a: "Indian rhinoceros",
		b: " Bengal tiger",
		c: "Asian elephant",
		d: "Saltwater crocodile",
		correct:"c",
	},
	{ 
		question:"4.What is the Largest reptile found in Sri Lanka ? ",
		a: "Monitor lizard",
		b: "Gree sea turtle",
		c: "King cobra ",
		d: "Mugger crocodile",
		correct:"d",
	},
	{
        question:"5.Which marine Mammal can be spotted off the coast of Sri Lanka, known for its acrobatic displays and playful nature? ",
        a:"Blue whale",
        b :"Dugong",
        c: "Spinner dolphin",
        d: "Humpback whale",
        correct:"c",

    },
	
];	


const quiz= document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_t = document.getElementById('a_t')
const b_t = document.getElementById('b_t')
const c_t = document.getElementById('c_t')
const d_t = document.getElementById('d_t')
const marksSection = document.getElementById('marksSection')
const submitBtn = document.getElementById('submit')
const radioButtons = document.querySelectorAll(".answer")

let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz() {

    deselectAnswers()
	resetAll()

    const currentQuizData = quizData[currentQuiz]

    questionEl.innerText = currentQuizData.question
    a_t.innerText = currentQuizData.a
    b_t.innerText = currentQuizData.b
    c_t.innerText = currentQuizData.c
    d_t.innerText = currentQuizData.d
}

function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelected() {
    let answer
    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })
    return answer
}

submitBtn.addEventListener('click', () => {	
    const answer = getSelected()
    if(answer) {
       if(answer === quizData[currentQuiz].correct) {
           score=+1
       }else{
		   score=-1
	   }	   
	   
       currentQuiz++

       if(currentQuiz < quizData.length) {
           loadQuiz()
       } else {
			showMarks();
           
	   }
    } 
})	


const MAXIMUM_TIME_IN_SECONDS = 0;
var elapsedTimeInSeconds = 60;

const spanElapsedSeconds = document.getElementById('elapsedSeconds')
const spanElapsedMinutes = document.getElementById('elapsedMinutes')

var timer;
window.addEventListener('load', () => {
	timer = setInterval(() => {
		elapsedTimeInSeconds--;

		let minites = Math.trunc(elapsedTimeInSeconds / 60);
		let seconds = elapsedTimeInSeconds % 60;

		spanElapsedSeconds.innerHTML = seconds.toString().padStart(2, '0');
		spanElapsedMinutes.innerHTML = minites.toString().padStart(2, '0');

		// Maximum time reached
		if( MAXIMUM_TIME_IN_SECONDS >= elapsedTimeInSeconds ){
			clearTimeout(timer);
			alert('your time is over , click ok to view your score');

			showMarks();
		}
	}, 1000)
})


function showMarks(){
	clearTimeout(timer);
	quiz.style.display = 'none'
	marksSection.style.display = 'block'
	marksSection.style.backgroundColor = 'red';
		if (score >= 10){
			marksSection.style.backgroundColor = 'green';
		}
	

	document.getElementById('mark').innerHTML = `${score} out of 5`
	
	
}

radioButtons.forEach(element =>{
	element.addEventListener('click', ()=>{
		if(element.id==quizData[currentQuiz].correct){
			let labelId = element.id+"_t";
			document.getElementById(labelId).style.color = "green";
		}
		else{
			let labelId = element.id+"_t";
			document.getElementById(labelId).style.color = "red";

			let correctLabelId = quizData[currentQuiz].correct + "_t";
			document.getElementById(correctLabelId).style.color = "green";
		}
		disableAll();
	})
	
});

function disableAll(){
	radioButtons.forEach(element =>{
		element.disabled = true;
	})
}

function resetAll(){
	radioButtons.forEach(element =>{
		element.disabled = false;
		let labelId = element.id+"_t";
		document.getElementById(labelId).style.color = "black";
	})
}