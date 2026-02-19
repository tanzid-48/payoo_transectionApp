
document.getElementById('cashOut-btn').addEventListener('click',function(){
// 1.get the agent number
let  cashOutNumber = getValueFromInput("cashOut-number")
 // validation
   if(cashOutNumber.length !== 11 || isNaN(cashOutNumber)){
    alert("Invalid Agent Number");
    return;
   }
 // 2.get the amount
let cashOutAmount = getValueFromInput("cashOut-amount")

//3.get the balance    
  let balanceElement = document.getElementById('balance')
  let balance = balanceElement.innerText;
  console.log(balance);

    //4. new balance calculate
  
     let newBalance = Number(balance) - Number(cashOutAmount);
      console.log(newBalance);

       //  5. valid the balance

    if(newBalance <0){
        alert("Invalid Amount");
        return;
    }

      //6. get the pin and verify
   let pin = getValueFromInput("cashOut-pin")
    if(pin==='1234'){
    // show an alert set new balance
    alert("cashOut Successful")
    balanceElement.innerText = newBalance;


  }else{
    // 5.show error alert
    alert("Invalid Pin");
    return;
  }
});
















// document.getElementById('cashOut-btn').addEventListener('click', function () {
//     // 1.get the agent number
//     const cashOutNumberInput = document.getElementById('cashOut-number');
//     const cashOutNumber = cashOutNumberInput.value;
//     console.log(cashOutNumber);
//     // validation
//    if(cashOutNumber.length !== 11 || isNaN(cashOutNumber)){
//     alert("Invalid Agent Number");
//     return;
// }
//     // 2.get the amount

//     let cashOutAmountInput = document.getElementById('cashOut-amount');
//     let cashOutAmount = cashOutAmountInput.value
//   console.log(cashOutAmount)
//  //3.get the balance    
//   let balanceElement = document.getElementById('balance')
//   let balance = balanceElement.innerText;
//   console.log(balance);

//   //4. new balance calculate
  
//   let newBalance = Number(balance) - Number(cashOutAmount);

//     //  5. valid the balance

//     if(newBalance <0){
//         alert("Invalid Amount");
//         return;
//     }
 
//  //6. get the pin and verify
 
//  let cashOutPinInput = document.getElementById('cashOut-pin');
//  let pin = cashOutPinInput.value;
//   if(pin==='1234'){
//     // show an alert set new balance
//     alert("cashOut Successful")
//     balanceElement.innerText = newBalance;


//   }else{
//     // 5.show error alert
//     alert("Invalid Pin");
//     return;
//   }
// });