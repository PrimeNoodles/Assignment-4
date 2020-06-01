// QUESTION 1

function talker1(){
    tTalk1 = document.getElementById("talk1").innerHTML = "I'm right";
}

function talker2(){
    tTalk1 = document.getElementById("talk1").innerHTML = "No, I'm right!";
}

// QUESTION 2

document.getElementById("hover-area").addEventListener("mouseover", function(e) {
    alert("Hey, I told you not to hover over me!");
});

// QUESTION 4

// In a Javascript file, write a program which checks the following things:
// checks that the password is 12345678
// if the password is incorrect, send an alert message
// Your page should also include an <h1> tag. If the information in the form is correct, have Javascript change the text in the <h1>.HTML page.

function validation(password) {
    if (password != "12345678") {
        alert("Incorrect Password!")
    } else {
        let text = document.getElementById("login").innerText = "Successfully logged in!"
    }
}