document.getElementById("pay-bill-btn").addEventListener('click',function(){ 

   //  1. bank account get
 let payReason = getValueFromInput("pay-bill-select");
 if(payReason === "Select Bill Type"){
    alert("Please Select a Reason to pay");
    return;
 }
  // 2.get bankAccount number
 let billerAccountNumber = getValueFromInput("pay-biller-number");
  // validation
 if(billerAccountNumber.length !== 11 || isNaN(billerAccountNumber)){
    alert("Invalid Account Number");
    return;
 }
  // 3.get amount
   let payAmount = getValueFromInput("pay-amount");
//    validation of amount 
   if(payAmount === "" || Number(payAmount) <= 0){
        alert("Invalid Amount");
        return;
    } 
   let currentBalance = getBalance();
   let newBalance =  currentBalance - Number(payAmount);
   
//   4. validation of balance 
 if(newBalance <0){
        alert("Insufficient Balance");
        return;
    }

    // 5. validation the Pin

    let pin = getValueFromInput("pay-bill-pin");
    
 if(pin==='1234'){
    // show an alert set new balance
    alert("payBill Successful")
    setBalance(newBalance);

  // get tht history
      let history = document.getElementById("history-container")

    //2. Create a new div
    let newHistory = document.createElement("div");
    // 3.new div innerHtml add kor
    newHistory.innerHTML = `
    <div class="transaction-card p-5 bg-base-100">
      Pay bill
        ${payAmount} taka from  ${billerAccountNumber}
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

 



