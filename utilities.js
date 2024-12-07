
function getInputFieldValue(id){
const inputValue=document.getElementById(id).value ;
console.log(" input", inputValue);
const inputValueNumber= parseFloat(inputValue)
console.log(inputValueNumber);
return inputValueNumber
}





function getInputTextValue(id){
    const inputText=document.getElementById(id).innerText;
    const inputTextNumber=parseFloat(inputText);
    return inputTextNumber
}