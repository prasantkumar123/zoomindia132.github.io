alert ("Created by Prasant. \n \n Welcome to 2020 zoom online class. I couldn't make the speaker button functional, because I have not learnt JavaScript yet. If any error occurs, go back and reload the page again.")
let name = prompt ("Please enter your name!")

function myFunction1(x) {
  x.classList.toggle("fa-microphone-slash");
}

function myFunction2(x) {
  x.classList.toggle("fa-video-slash");
}

function myFunction3(x) {
  x.classList.toggle("fa-volume-mute");
}


function leave() {
  confirm("Leave the meeting! ");
}

function zoom() {
  confirm("Prasant's Personal Meeting Room \n \n You are using enhanced encryption \n \n Meeting ID: 343 301 2457 \n Host: Prasant \n Password: 1234 \n Invite link: https://us04web.zoom.us/j/343301.. \n participant: 3000 \n \n You are connected to zoom Global network via data centers in India");
  
}

function share() {
  confirm("Only host can share in this meeting");
}

function participants() {
  confirm(" 1. Prasant (host) \n 2. Rebel (co-host) \n 3. " + name + " (me) \n 4. Chhota Bheem \n 5. Doraemon \n 6. Motu \n 7. Patlu");
}

function more() {
  confirm("I am very sorry " +name+ ". Host has disabled this function.");
}






