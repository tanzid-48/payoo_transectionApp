
// machine id ---> input value

function getValueFromInput(id){
    let input = document.getElementById(id);
    let value = input.value;
    // console.log(id,value)
    return value;
}
// machine --> balance
function getBalance(){
    let balanceElement = document.getElementById("balance");
    let balance = balanceElement.innerText;
    // console.log(`current balance ${Number(balance)}`);
    return Number(balance);
}

// machine value --> set balance

function setBalance(value){
    let balanceElement = document.getElementById("balance");
    balanceElement.innerText = value;
}