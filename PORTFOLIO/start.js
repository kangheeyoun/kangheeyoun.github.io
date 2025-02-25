
document.getElementById("WelcomeBtn").onclick = function() {
    var body = document.body;
    var button = document.getElementById("WelcomeBtn");


    body.classList.add("fade-out");

    setTimeout(function() {
        window.location.href = "portfolio.html"; 
    }, 1000); 
};
