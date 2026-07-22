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

function question1(){
content.innerHTML=`
<h1>Question 1 ❤️</h1>

<p>What is my favourite nickname for you?</p>

<button onclick="wrongAnswer()">Honey</button>
<button onclick="page1()">Kuchi Pie</button>
<button onclick="wrongAnswer()">Sweetie</button>
<button onclick="wrongAnswer()">Princess</button>
`;
}

function page1(){

confettiBlast();

content.innerHTML=`

<h1>I Love You More Than Words Can Say ❤️</h1>

<p>
These past six months with you have been some of the happiest months of my life. Every single day feels brighter because you're in it. I honestly can't imagine my life without you anymore. You've become such a huge part of my heart that being apart from you feels wrong. You make ordinary days feel special, and somehow you always manage to make me smile even when I'm having a bad day. I love you more than I could ever properly explain with words. No matter how many times I say it, it never feels like enough. You're my favourite person, my comfort, my happiness, and the person I want beside me through everything life throws at us.
</p>

<button onclick="question2()">Next ❤️</button>

`;
}

function question2(){

content.innerHTML=`

<h1>Question 2 ❤️</h1>

<p>Who do you like more?</p>

<button onclick="wrongAnswer()">Joyce</button>
<button onclick="wrongAnswer()">Me</button>
<button onclick="wrongAnswer()">Me</button>
<button onclick="page2()">Me</button>

`;

}

function page2(){

confettiBlast();

content.innerHTML=`

<h1>You Make Me Feel So Loved ❤️</h1>

<p>
You make me feel happier than anyone ever has. The way you laugh, the way you talk, the way you care about things, and all the little things you do make me feel so loved. You're honestly the cutest person I've ever seen. Your little laughs can instantly make my entire day better. Being loved by you feels like the greatest gift I've ever received. You're my everything, the first person I want to tell things to, the first person I think about when I wake up, and the last person I think about before I sleep. Out of everyone in the world, you're the only one I love this way, and I wouldn't trade what we have for anything.
</p>

<button onclick="question3()">Next ❤️</button>

`;

}

function question3(){

content.innerHTML=`

<h1>Question 3 ❤️</h1>

<p>Who do you love the most?</p>

<button onclick="page3()">Me</button>
<button onclick="page3()">Me</button>
<button onclick="page3()">Me</button>
<button onclick="page3()">Me</button>

`;

}

function page3(){

confettiBlast();

content.innerHTML=`

<h1>Everything About You Makes Me Smile ❤️</h1>

<p>
Everything about you makes me smile. Your laugh is one of my favourite sounds in the world. Watching you get rage baited is somehow one of the funniest things ever, and even when you're flipping me off, I somehow find it adorable. Your eyes say things words never could, and every time I look at them I get completely lost. Your hair is beautiful, your smile can fix even the worst day, and your warmth makes everything feel okay. The thing I love most though is how genuine you are. Your love is honest, pure, caring and real. You're such an incredible person, and every little thing about you makes me fall for you even more.
</p>

<button onclick="question4()">Next ❤️</button>

`;

}

function question4(){

content.innerHTML=`

<h1>Question 4 ❤️</h1>

<p>Who is the gorgeous amazing most cutuu person from the following?</p>

<button onclick="page4()">My Kuchi Pie</button>
<button onclick="page4()">My Wife</button>
<button onclick="page4()">My Darling</button>
<button onclick="page4()">You</button>

`;

}

function page4(){

confettiBlast();

content.innerHTML=`

<h1>Our Future ❤️</h1>

<p>
When I think about the future, I always see you in it. I think about the day we'll finally get to be together all the time and never have to say goodbye. I think about building our little dream life together. I think about the treehouse, and how you'll be sitting there painting while I work on it. I imagine a room filled with your canvases and beautiful artwork covering the walls. I imagine us laughing together, making memories together, and growing old together. More than anything, I just want a future where I get to wake up next to you every day and spend my life making you happy. You're the person I want to share every chapter of my life with.
</p>

<button onclick="page5()">One Last Thing ❤️</button>

`;

}

function page5(){

confettiBlast();
  for(let i=0;i<100;i++){

setTimeout(()=>{

let heart=document.createElement("div");

heart.innerHTML="❤️";

heart.className="click-heart";

heart.style.left=
(Math.random()*window.innerWidth)+"px";

heart.style.top=
(Math.random()*window.innerHeight)+"px";

document.body.appendChild(heart);

setTimeout(()=>{
heart.remove();
},1500);

},i*30);

}

content.innerHTML=`

<h1>To My Kuchi Pie ❤️</h1>

<p>
Happy 6 Months, babyyy.
<br><br>
I don't think you'll ever truly understand how much you mean to me. You've brought so much happiness into my life that sometimes I don't even know how to put it into words. You've become my safest place, my favourite person, and the person who makes everything feel worth it.
<br><br>
Thank you for every laugh, every conversation, every memory, every smile and every moment we've shared together. Thank you for being patient with me, caring about me and loving me.
<br><br>
I love your laugh, your smile, your eyes, your beautiful hair, your kindness and your heart. I love the way you make me feel alive. I love how comfortable I am around you. I love every little thing that makes you who you are.
<br><br>
You are my baby, my darling, my wife, my everything and forever my Kuchi Pie.
<br><br>
Happy 6 Months ❤️
<br><br>
And here's to every month after this one.
</p>

<h2>❤️ 6 Months Down ❤️</h2>

<h2>❤️ Forever To Go ❤️</h2>

`;

}
for(let i=0;i<25;i++){

let heart=document.createElement("div");

heart.innerHTML="❤️";

heart.classList.add("heart");

heart.style.left=Math.random()*100+"vw";

heart.style.animationDuration=
(4+Math.random()*4)+"s";

heart.style.fontSize=
(15+Math.random()*20)+"px";

document.body.appendChild(heart);

}
document.addEventListener("click",(e)=>{

let heart=document.createElement("div");

heart.innerHTML="❤️";

heart.className="click-heart";

heart.style.left=e.clientX+"px";

heart.style.top=e.clientY+"px";

document.body.appendChild(heart);

setTimeout(()=>{
heart.remove();
},1000);

});
