
var typed = new Typed('.multiple-text', {
    strings: ["Frontend Devloper","Web Developer","Software Engineer","Coder"],
    typeSpeed: 100,
    backSpeed: 100,
    loop: true
 });

/****************CONTACT******************/  
document.getElementById("contactForm").addEventListener("submit", function(event) {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;

    if (!name || !email || !message) {
        alert("Please fill in all fields.");
        event.preventDefault();
    }
});
