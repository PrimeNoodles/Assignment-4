// QUESTION 1

function talker1(){
    tTalk1 = document.getElementById("talk1").innerHTML = "I'm right";
}

function talker2(){
    tTalk1 = document.getElementById("talk1").innerHTML = "No, I'm right!";
}

// QUESTION 2


// function myHover(element) {
//     element.
// }
document.getElementById("hover-area").addEventListener("mouseover", function(e) {
    alert("Hey, I told you not to hover over me!");
});