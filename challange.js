// Set the date we're counting down to
var now = new Date().getTime();
var countDownDate = now+20000;
// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now1 = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now1;

  // Time calculations for days, hours, minutes and seconds
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="timer"
  document.getElementById("timer").innerHTML = 
  minutes + "m " + seconds + "s ";

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    window.location.replace("timeout.html");  }
}, 1000);