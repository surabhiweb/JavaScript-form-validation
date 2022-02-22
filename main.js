let id = (id) => document.getElementById(id);

let classes = (classes) => document.getElementsByClassName(classes);

let username = id("username"),
  email = id("email"),
  password = id("password"),
  form = id("form"),
  errorMsg = classes("error"),
  successIcon = classes("success-icon"),
  failureIcon = classes("failure-icon");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  if(username.value === "" ){
      errorMsg[0].innerHTML = "Username Cannot be blank";
      failureIcon[0].style.opacity = "1";
      successIcon[0].style.opacity = "0";
  }
  else {
      errorMsg[0].innerHTML = '';
      failureIcon[0].style.opacity = "0";
      successIcon[0].style.opacity = "1";   
  }
});

form.addEventListener("submit", (e) => {
  e.preventDefault();

  if(email.value === "" ) {
    errorMsg[1].innerHTML = "Email Cannot be blank";
    failureIcon[1].style.opacity = "1";
    successIcon[1].style.opacity = "0";
  }
  else {
      errorMsg[1].innerHTML = '';
      failureIcon[1].style.opacity = "0";
      successIcon[1].style.opacity = "1";   
  }
});
form.addEventListener("submit", (e) => {
  e.preventDefault();
  
  if(password.value === "" ) {
    errorMsg[2].innerHTML = "Password Cannot be blank";
    failureIcon[2].style.opacity = "1";
    successIcon[2].style.opacity = "0";
  }
  else {
      errorMsg[2].innerHTML = '';
      failureIcon[2].style.opacity = "0";
      successIcon[2].style.opacity = "1";   
  }
});

