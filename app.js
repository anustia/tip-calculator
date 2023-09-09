const bill=document.getElementById("bill");
const number=document.getElementById("number");
const buttons=Array.from(document.querySelectorAll(".button_div button"));
const costum=document.getElementById("costum");

const amount_result=document.getElementById("amount_result");
const total_result=document.getElementById("total_result");

const zero=document.getElementById("zero");

const reset=document.getElementById("reset")


let billvalue=0;
let numbervalue=0;
let buttonpr=0;

let tipamount=0;
let total=0;

bill.addEventListener("input",(event)=>{
    if(!event.target.value==""){
    billvalue=parseFloat(event.target.value);
    }else{
        billvalue=0;
    }
    calculation();
    
})
number.addEventListener("input",(event)=>{
    numbervalue=parseInt(event.target.value);
    
    if(numbervalue>0){
        zero.innerText=""
        event.target.style.border="none"
    }else if(numbervalue===0){
        zero.innerText='Can\'t be zero';
        event.target.style.border="2px solid #E17052"
        }
    
    calculation();
    }

    
    
    
)
buttons.map((buttons)=>{
    buttons.addEventListener("click",(Event)=>{
        buttonpr=parseFloat(Event.target.innerText);
        costum.value="";
         calculation();
        


    })
}
)
costum.addEventListener("input",(event)=>{
    buttonpr=parseFloat(event.target.value);
    console.log(buttonpr)
    calculation();
})


function calculation(){
    if(!numbervalue||!buttonpr){
        amount_result.innerText="$0.00"
        total_result.innerText="$0.00"
   
    }else{  
        tipamount=Math.round((billvalue*(buttonpr/100)/numbervalue)*100)/100;
        total=Math.round((billvalue/numbervalue+tipamount)*100)/100;
        amount_result.innerText="$"+tipamount.toFixed(2);
        total_result.innerText="$"+total.toFixed(2);
        

    }

}

reset.addEventListener('click',function reset(event){
    event.preventDefault();
    costum.value="";
    number.value="";
    bill.value="";
    amount_result.innerText="$0.00"
    total_result.innerText="$0.00"
})



