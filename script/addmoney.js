document.getElementById("add-money-btn").addEventListener('click',function(){

//  1. bank account get

 let bankAccount = getValueFromInput("add-money-bank");
 if(bankAccount === "Select a bank"){
    alert("Please Select a Bank");
    return;
 }
 // 2.get bankAccount number
  let accNo = getValueFromInput("add-money-number");
   // validation
   if(accNo.length !== 13 || isNaN(accNo)){
    alert("Invalid Account Number");
    return;
   }
  // 3.get amount
   let amount = getValueFromInput("add-money-amount");
   let currentBalance = getBalance();
   let newBalance =  currentBalance + Number(amount);
   
   let pin = getValueFromInput("add-money-pin");
      if(pin==='1234'){
    // show an alert set new balance
    alert(`Add Money  Successful  from 
        ${bankAccount} at ${new Date()}`);
    setBalance(newBalance);


  }else{
    // 5.show error alert
    alert("Invalid Pin");
    return;
  }
});