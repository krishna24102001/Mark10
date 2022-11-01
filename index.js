const next = document.getElementById('next-btn');
const checkout = document.getElementById('checkout')
const table = document.getElementsByTagName('table')[0];
const checkoutBtn = document.querySelector('#checkout-btn')
const billAmount = document.querySelector('.bill-Amount')
const checkoutPay = document.querySelector('.checkout-Amount')
let td = document.querySelectorAll('.noOfNotes')

const notes =[2000,500,100,20,10,5,1];
let returnNotes =[]
next.addEventListener('click', function () {
    if(billAmount.value>0){
        checkout.classList.replace('checkout','checkout-show');
    }
})

checkoutBtn.addEventListener('click', function(){
   table.style.visibility ='visible'
   const bill =  billAmount.value;
   const checkoutAmount = checkoutPay.value;
   if(bill>0){
       if(checkoutAmount>=bill){
            let changeCash = checkoutAmount - bill;
            calculateChange(changeCash)
        }else{
            alert('Unsufficient cash, please enter adequate cash amount!')
        }
    }else{
        alert("Invalid Bill Amount")
    }
})

const calculateChange =(amountToBeReturned)=> {
    for (let i = 0; i < notes.length; i++) {
  
      const numberOfNotes = Math.trunc(amountToBeReturned / notes[i]);
      amountToBeReturned = amountToBeReturned % notes[i];

      td[i].innerText = numberOfNotes;
    }
  }