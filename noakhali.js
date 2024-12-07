document.getElementById("donation-btn2").addEventListener("click",function(){
    const donationAmount = getInputFieldValue("donation-amount2");
    const donatedBalance= getInputTextValue("donated-balance2")
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
    document.getElementById("donated-balance2").innerText=totalDonatedAmount
   const initialBalanceAmount= initialBalance-donationAmount
   document.getElementById("balance").innerText = initialBalanceAmount
    console.log(donationAmount,donatedBalance,initialBalance,totalDonatedAmount);

    const modal= document.getElementById('my_modal_1')
    if(typeof donationAmount === "number" && !isNaN(donationAmount)){
modal.showModal()
    }
// history data
const historyData=document.createElement("div")
const historyContainer =document.getElementById("history-container")
historyData.innerHTML=
` <P class="text-2xl">${donationAmount} Donation for flood in Bangladesh</P>
<p>date: ${new Date()}</p>
`
historyContainer.appendChild(historyData)
})
