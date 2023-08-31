/* creating an array of numbers, questions, options, and answers*/
const quizData = [
	{
    question: "1. Which UNESCO World Heritage Site in Sri Lanka is known for its ancient rock fortress and frescoes??",
    correct: "a",
      a: "Sigiriya",
      b: "Polonnaruwa",
      c: "Dambulla cave temple",
      d: "Anuradhapura",

	},
	{
		question:"2.Which coastal town in Sri Lanka is famous for its Beautiful beaches and surfing spots? ",
		a: "Negambo",
		b: "Mirissa",
		c: "Trincomalee",
		d: "Arugam Bay",
		correct:"d",
	},
	{
		question:"3.Which city in Sri Lanka is known for its historic fort, Dutch architecture, and vibrant atmosphere? ?",
		a: "Jaffna",
		b: " Nuwara eliya",
		c: "Galle",
		d: "Benthota",
		correct:"c",
	},
	{
		question:"4.Which hill station in Sri Lanka is known for its scenic tea plantations and is often referred to as the Tea Capital?",
		a: "Ella",
		b: "Kandy",
		c: "Haputhale",
		d: "Nuwara eliya",
		correct:"d",
	},
	{
        question:"5.Which coastal town in Sri Lanka is famous for its iconic stilt fishermen and pristine beaches?",
        a:"trincomalee",
        b :"jaffna",
        c: "Mirissa",
        d: "Matara",
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
           score+=1
       }else{
		   score--
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
		if (score >= 3){
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