
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

//  machine id --> hide all -->show id

function showOnly(id){
    let addMoney = document.getElementById("add-money")
    let cashOut = document.getElementById("cash-out");

    // hide all
    addMoney.classList.add("hidden")
    cashOut.classList.add("hidden");

    // id element gula dor

    let selected = document.getElementById(id);
    selected.classList.remove("hidden");
}
 