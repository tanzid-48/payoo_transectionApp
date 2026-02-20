
document.getElementById('send-money-btn').addEventListener('click', function () {

  let sendMoneyNumber = getValueFromInput('send-money-number');
   // validation
   if(sendMoneyNumber.length !== 11 || isNaN(sendMoneyNumber)){
    alert("Insufficient Number");
    return;
   }

     // 3.get amount
   let sendMoneyAmount = getValueFromInput("send-money-amount");
//    validation of amount 
   if(sendMoneyAmount === "" || Number(sendMoneyAmount) <= 0){
        alert("Invalid Amount");
        return;
    }

  let currentBalance = getBalance();
   let newBalance =  currentBalance - Number(sendMoneyAmount);
   
  //   4. validation of balance 
 if(newBalance <0){

     alert("Insufficient Balance");
        return;
    }

       // 5. validation the Pin

    let pin = getValueFromInput("send-money-pin");
    
 if(pin==='1234'){
    // show an alert set new balance
    alert("Send Money Successful")
    setBalance(newBalance);

  // get tht history
      let historyContainer = document.getElementById("history-container")

    //2. Create a new div
    let newHistory = document.createElement("div");
    // 3.new div innerHtml add kor
    newHistory.innerHTML = `
    <div class="transaction-card p-5 bg-base-100">
      Send Money
        ${sendMoneyAmount} taka from  ${sendMoneyNumber}
        at ${new Date()}
 </div>
    `;
    // 4. append this
    historyContainer.append(newHistory);


  }else{
    // 5.show error alert
    alert("Invalid Pin");
    return;
  }









});