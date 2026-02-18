document.getElementById('btn-login').addEventListener('click',   function (event) {
//  1.get the mobile number
   let inputNumber = document.getElementById('input-number')
    let contactNumber = inputNumber.value;
    console.log(contactNumber);

    // 2. get the pin
   let inputPin = document.getElementById('input-pin') 
   let pin = inputPin.value;
   console.log(pin);
 
 //    3.match the pin and number
  if(contactNumber === "01798546510" && pin ==="1234"){
   
    // 3.1 login home page
    alert("Login Success");
    window.location.assign('home.html')

  } else{
    alert("login Failed");
    return;
  }

    })