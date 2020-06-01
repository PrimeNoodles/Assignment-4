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

document.getElementById("login-form").addEventListener("submit", function(e) {
    e.preventDefault();
    let password = document.getElementById("password").value;
    if (password != "12345678") {
        alert("Incorrect Password!")
    } else {
        document.getElementById("login").innerText = "Successfully logged in!"
    }
});