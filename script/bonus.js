document.getElementById("get-bonus-btn").addEventListener('click', function() {
    let coupon = getValueFromInput("bonus-coupon-input");
   
    if(coupon === ""){
        alert("Please enter a valid coupon code");
        return;
    }

    // Example validation
    if(coupon === "tanzid48"){
        let bonusAmount = 100; // define the bonus amount

        alert(`Bonus Applied: ${bonusAmount} taka added!`);

        // update balance
        let currentBalance = getBalance();
        let newBalance = currentBalance + bonusAmount;
        setBalance(newBalance);

        // Add to history
        let historyContainer = document.getElementById("history-container");
        let newHistory = document.createElement("div");
        newHistory.innerHTML = `
            <div class="transaction-card p-5 bg-base-100 mt-3">
                Bonus Applied: +${bonusAmount} taka <br>
                Coupon: ${coupon} <br>
                ${new Date().toLocaleString()}
            </div>
        `;
        historyContainer.prepend(newHistory);

    } else {
        alert("Invalid coupon");
    }

     clearInputs(["bonus-coupon-input"]);

});