document.getElementById("donation-btn3").addEventListener("click",function(){
    const donationAmount = getInputFieldValue("donation-amount3");
    const donatedBalance= getInputTextValue("donated-balance3")
    const initialBalance= getInputTextValue("balance")
    if(isNaN(donationAmount) || donationAmount<=0 ){
        alert("opps! your amount is not valid or less than zero")
        return
    }
    if(donationAmount>initialBalance){
        alert("Your amount is insufficient")
        return
    }
    const totalDonatedAmount=donationAmount+donatedBalance
    document.getElementById("donated-balance3").innerText=totalDonatedAmount
   const initialBalanceAmount= initialBalance-donationAmount
   document.getElementById("balance").innerText = initialBalanceAmount
    console.log(donationAmount,donatedBalance,initialBalance,totalDonatedAmount);

    const modal= document.getElementById('my_modal_4')
    if(typeof donationAmount === "number" && !isNaN(donationAmount)){
modal.showModal()
    }

})
