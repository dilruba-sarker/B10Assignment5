const historyButton= document.getElementById("history-button")
const donationButton= document.getElementById("donation-button")
const cardContainer = document.getElementById("card-container")
const historySection =document.getElementById("history-section")

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
    cardContainer.classList.add("hidden")
    historySection.classList.remove('hidden')
 
})

donationButton.addEventListener("click",function(){
    donationButton.classList.add(
          "bg-green-400",
          "p-2", "border-solid","border-2",
          "border-indigo-600"
    )

    donationButton.classList.remove("btn")
    historyButton.classList.add("btn")
    cardContainer.classList.remove("hidden")
    historySection.classList.add('hidden')
    historyButton.classList.remove(
          "bg-green-400",
          "p-2", "border-solid","border-2",
          "border-indigo-600"
    )
    
})