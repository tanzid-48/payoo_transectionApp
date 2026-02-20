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
    // 1. catch the  history-container
    let history = document.getElementById("history-container")

    //2. Create a new div
    let newHistory = document.createElement("div");
    // 3.new div innerHtml add kor
    newHistory.innerHTML = `
    <div class="transaction-card p-5 bg-base-100">
      Add Money  Successful  from 
        ${bankAccount} , acc-no ${accNo}
        at ${new Date()}
 </div>
    `;
    // 4. append this
    history.append(newHistory);
    
  }else{
    // 5.show error alert
    alert("Invalid Pin");
    return;
  }
});