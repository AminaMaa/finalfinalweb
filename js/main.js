/*animation*/

document.addEventListener('DOMContentLoaded', function () {
    anime.timeline({
        easing: 'easeInOutCubic',
        duration: 800,
        autoplay: true, // Automatically start the animation
    })
    .add({
        targets: [
            '.s-intro .text-pretitle', 
            '.s-intro .text-huge-title', 
            '.text-medium-title', 
            '.intro-image', 
            '.social-links', 
            '.about-info__pic', 
            '.about-info__text', 
            '.contact-top', 
            '.education_title', 
            '.skills', 
            '.internships-intro', 
            '.about-timelines',
            '.works-portfolio',
            '.events',
            '.works-portfolio',
            '.quiz'

        ],
        translateX: [100, 0],  // Move from right to left
        opacity: [0, 1],       // Fade in
        delay: anime.stagger(400), // Stagger each element by 400ms
    });
});

/*QUIZ*/

let i;
let count = 0
let labellist = document.getElementsByClassName("correctAns")
let correctAns = document.getElementsByClassName("correct")
document.querySelector("span.totalScore").innerHTML = correctAns.length
let marksObtained = 0
let resultElements = document.getElementsByClassName("result")
function LoadResult() {
    for (i = 0; i < correctAns.length; i++) {
        if (correctAns[i].checked) {
            resultElements[i].innerHTML = "Yes, your answer is correct"
            resultElements[i].classList.add("correctOpt")
            resultElements[i].classList.remove("incorrectOpt")
            marksObtained++;
        }
        else {
            resultElements[i].innerHTML = "Incorrect Answer !"
            resultElements[i].classList.add("incorrectOpt")
            resultElements[i].classList.remove("correctOpt")
        }
    }
        
    document.querySelector(".marksObtained").innerHTML = marksObtained
    if (marksObtained < correctAns.length / 2)
        document.querySelector(".emoji").innerHTML = "&#129402;"
    else
        
        document.querySelector(". emoji").innerHTML = "&#128515;"
    document.querySelector(".score-count").setAttribute("style", "display:block")
    marksObtained=0
}