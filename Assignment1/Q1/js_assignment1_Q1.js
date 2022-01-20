function myDisplayer(some) {
    document.getElementById("demo").innerHTML = some;
  }
  
  function myCalculator(num1, num2, myCallback) {
    let sum = num1 + num2;
    myCallback(sum);
  }
  
  function callingFunction(){
    var textAreaElement1 = parseInt(document.getElementById('txt1').value)
    var textAreaElement2 = parseInt(document.getElementById('txt2').value)
    if(Number.isNaN(textAreaElement1) || Number.isNaN(textAreaElement2) )
    {
        document.getElementById("demo").innerHTML = 0;
        alert("please enter numbers");
        return false;
    }
    myCalculator(textAreaElement1, textAreaElement2, myDisplayer);
  }