function openUser(userName) {
 var i;
 var x = document.getElementsByClassName("user");
 for (i = 0; i < x.length; i++) {
   x[i].style.display = "none";
 }
 document.getElementById(userName).style.display = "block";
}

function callMentor (country) {
  
}