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
  confirm("Sololearn's official Meeting Room \n \n You are using enhanced encryption \n \n Meeting ID: 343 301 2457 \n Host: Sololearn \n Password: 1234 \n Invite link: https://us04web.zoom.us/j/343301.. \n participant: 3000 \n \n You are connected to zoom Global network via data centers in India");
  
}

function share() {
  confirm("Only host can share in this meeting");
}

function participants() {
  confirm(" 1. Sololearn (host) \n 2. Prasant \n 3. " + name + " (co-host)");
}

function more() {
  confirm("I am very sorry " +name+ ". Host has disabled this function.");
}






