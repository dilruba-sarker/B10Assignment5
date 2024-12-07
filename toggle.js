const historyButton= document.getElementById("history-button")
const donationButton= document.getElementById("donation-button")

historyButton.addEventListener("click",function(){
    historyButton.classList.add(
          "bg-green-400",
          "p-2", "border-solid","border-2",
          "border-indigo-600"
    )
    donationButton.classList.remove(
          "bg-green-400",
          "p-2", "border-solid","border-2",
          "border-indigo-600"
    )
    historyButton.classList.remove("btn")
    donationButton.classList.add("btn")
})

donationButton.addEventListener("click",function(){
    donationButton.classList.add(
          "bg-green-400",
          "p-2", "border-solid","border-2",
          "border-indigo-600"
    )
    donationButton.classList.remove("btn")
    historyButton.classList.add("btn")
    
    historyButton.classList.remove(
          "bg-green-400",
          "p-2", "border-solid","border-2",
          "border-indigo-600"
    )
})