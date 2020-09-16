function Validate() {
    var Username = document.getElementById('Username');
    var Password = document.getElementById('Password');
    if (Username.value=="" && Password.value=="" )
    {
       alert("Kindly fill all details");
      return true;
    }
    else if(Username.value=="")
    {
      alert("Please enter Username");
      return false;
    }
    else if(Password.value=="")
    {
      alert("Please enter Password");
      return false;
    }
    else 
    {
        alert("Login Successfully");
        return true;
    }
}
