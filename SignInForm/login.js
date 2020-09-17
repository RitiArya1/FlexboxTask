function validateForm() {
  var username = document.getElementById('username');
  var password = document.getElementById('password');
  if (username.value=="" && password.value=="" )
  {
     alert("Kindly fill all details");
  }
  else if(username.value=="")
  {
    alert("Please enter Username");
  }
  else if(password.value=="")
  {
    alert("Please enter Password");
  }
  else 
  {
    var span = document.getElementById('name');
    span.innerText = username.value;
    var form1 = document.getElementById('form1');
    form1.style.display='';  
    var message = document.getElementById('message');
    message.style.display='none';
  }
}
