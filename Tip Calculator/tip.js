let billAmount=document.querySelector("#bill");
let percent=document.querySelector("#percentage");
let tip_Amt=document.querySelector("#tip");
let total=document.querySelector('#total');
var button = document.getElementById("calculate");
button.addEventListener("click", ()=>{
  let Per=percent.value
  let Amount=billAmount.value
  console.log(Per)
   let amount=(Per/100)*Amount;
  console.log(amount)
    tip_Amt.value= `$ ${amount}`
    let newtotal= Number(Amount)+Number(amount)
    total.value=newtotal
});
