/* creating an array of numbers, questions, options, and answers*/
const quizData = [             /*add questions to the array*/
	{
    question: "1.How did Pittu get  Cylindrical shape Traditionally?",
    correct: "a",
      a: "Bamboo stem mold",
      b: "Cylindrical clay mold",
      c: "Stainless steel",
      d: "Baked",

	},
	{
    
		question:"2. Ambulthiyal is made with?",
		a: "Fish",
		b: "Vegitables",
		c: "Floar",
		d: "Rice ",
		correct:"a",
	},
	{
		question:"3.Srilankans Main Food ?",
		a: "Burgers",
		b: "Pizza",
		c: "Rice and Curry",
		d: "Hoppers",
		correct:"c",
	},
	{
		question:"4. Which Kitchen implement was originally used to make Coconut (pol) Sambol?",
		a: "Blender",
		b: "Food processor ",
		c: "Grater",
		d: "Mortar and pestle",
		correct:"d",
	},
	{
		question:"What is the Popular Sri Lankan traditional dish made from Rice and Coconut milk called?",
		a:"Hoppers",
		b:"Kiribath", 
		c:"Kottu Roti" ,
		d:"Pol sambol",
		correct:"b",
	},
	
	
];	


const quiz= document.getElementById('quiz')                 /*get element From the quiz*/
const answerEls = document.querySelectorAll('.answer')      /*get element From the answers*/
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
    answerEls.forEach(answerEl => answerEl.checked = false)      //check the answer is correct or not
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


const MAXIMUM_TIME_IN_SECONDS = 0;        // set the timer
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


function showMarks(){        //final marks
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