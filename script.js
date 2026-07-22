const content = document.getElementById("content");

function confettiBlast(){
confetti({
particleCount:150,
spread:100,
origin:{y:0.6}
});
}

function wrongAnswer(){
content.classList.add("shake");

setTimeout(()=>{
content.classList.remove("shake");
},400);
}

function startQuiz(){
question1();
}
