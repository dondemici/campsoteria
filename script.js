let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 5000); // Change image every 2 seconds
}

setInterval(runClock, 1000); // Use function reference directly, not as a string
runClock();

function runClock(){
    let today = new Date();
    let cDate = today.toLocaleDateString(); // Corrected method name
    let timeStr = today.toLocaleTimeString();
    document.getElementById("dateNow").innerHTML = cDate +" " + timeStr; // Use innerHTML for line breaks
}

let emailBody = document.getElementById("conMessage").value;

function sendEmail() {
  Email.send({
      Host: "smtp.gmail.com",
      Username: "acyantune@gmail.com",
      Password: "Enter your password",
      To: 'receiver@email_address.com',
      From: "sender@email_address.com",
      Subject: "Sending Email using javascript",
      Body: emailBody,
  })
      .then(function (message) {
          alert("mail sent successfully")
      });
}
