function formValidation()
{
var passid = document.registration.passid;
var uname = document.registration.username;
var ubranch = document.registration.branch;
var uemail = document.registration.email;
var umsex = document.registration.msex;
var ufsex = document.registration.fsex; 
  if(passid_validation(uname)) {
    if(allLetter(passid,7,12)) { 
        if(countryselect(ubranch)) {
            if(ValidateEmail(uemail)) {
              if(validsex(umsex,ufsex)) {}
              } 
        }
      }
    }
    return false;
  }


function passid_validation(passid,mx,my) {
  var passid_len = passid.value.length;
if (passid_len == 0 ||passid_len >= my || passid_len < mx) {
    alert("Password should not be empty / length be between "+mx+" to "+my);
    passid.focus();
    return false;
  }
  return true;
}



function allLetter(uname) { 
  var letters = /^[A-Za-z]+$/;
  if(uname.value.match(letters))  {
    return true;
  } else  {
    alert('Username must have alphabet characters only');
    uname.focus();
    return false;
  }
}




function countryselect(ubranch)  {
  if(ucountry.value == "Default") {
    alert('Select your Branch from the list');
    ucountry.focus();
    return false;
} else {
    return true;
  }
}



function ValidateEmail(uemail) {
  var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if(uemail.value.match(mailformat))  {
    return true;
  } else {
    alert("You have entered an invalid email address!");
    uemail.focus();
    return false;
  }
}


function validsex(umsex,ufsex) {
  x=0;
  if(umsex.checked) {
    x++;
  } 
  if(ufsex.checked) {
    x++; 
  }
  if(x==0)  {
    alert('Select Male/Female');
    umsex.focus();
    return false;
  } else {
    alert('Form Successfully Submitted');
    window.location.reload()
    return true;
  }
}