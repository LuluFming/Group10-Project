function openLoginForm(){
  document.body.classList.add("showLoginForm");
  document.getElementById('id01').style.display='block'
}
function closeLoginForm(){
  document.body.classList.remove("showLoginForm");
}

// Get the modal
var modal = document.getElementById("id01");

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

function callLoginForm(checkOpen){
  if (checkOpen == true) {
    openLoginForm();
  }
}