document.getElementById("donation-btn").addEventListener('click',function(){
    const donationAmount = getInputFieldValue("donation-amount")
console.log(donationAmount);
    const donatedBalance= getInputTextValue("donated-balance")
    const initialBalance= getInputTextValue("balance")
    if (isNaN(donationAmount) || donationAmount <= 0) {
        alert("Oops! Please enter a valid donation amount greater than zero.");
        return; // Exit the function if invalid input
    }
    if (donationAmount > initialBalance) {
        alert("Insufficient balance for the donation.");
        return;
    }
    const donatedCurrentBalance = donationAmount+donatedBalance;
    document.getElementById("donated-balance").innerText=donatedCurrentBalance
    const currentBalance=initialBalance-donationAmount
    document.getElementById("balance").innerText=currentBalance 
    document.getElementById("donation-amount").value= ' '
    
 

if (typeof donationAmount === "number" && !isNaN(donationAmount)) {
   const modal = document.getElementById("my_modal_2"); 
   if (modal && modal.tagName.toLowerCase() === "dialog") {
       modal.showModal(); 
   } else {
       console.error("Element with ID 'my_modal_2' is not a <dialog> element or does not exist.");
   }
}
 
 console.log(donatedCurrentBalance, currentBalance);
// history data

const historyData=document.createElement("div")
const historyContainer =document.getElementById("history-container")
historyData.innerHTML=
` <P class="text-2xl">${donationAmount} Heavy rains trigger new floods in Noakhali</P>
<p>date: ${new Date()}</p>
`
historyContainer.appendChild(historyData)
// 

})

function blog(){
    window.location.href = "home.html";
}

