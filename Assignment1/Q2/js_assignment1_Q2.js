function callingFunction(){
  var firstName = document.getElementById('txt1').value;
  var lastName = document.getElementById('txt2').value;
  console.log(firstName);
  console.log(lastName);
  if(firstName.length===0 || lastName.length===0)
  {
      document.getElementById("demo").innerHTML = "empty strings provided";
      alert("enter correct data");
      return false;
  }
  else {
    var result = ((txt1,txt2) => {return txt1.charAt(0).toUpperCase()+txt2.charAt(0).toUpperCase();})(firstName,lastName);
    document.getElementById("demo").innerHTML = result;
  }
}