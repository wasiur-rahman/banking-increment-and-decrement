//Login page
let logIn = document.querySelector('#log-in')
let logInError = document.querySelector('#log-in .wapper .error')
let submitBtn = document.querySelector("#log-in .wapper .btn-submit")
let inputName = document.querySelector("#log-in .wapper input[type= 'text']")
let inputPassword = document.querySelector("#log-in .wapper input[type='password']")
let banKing = document.querySelector('#bankign')

function checkLogin(){
    if(inputName.value ===""||inputName.value === null||inputPassword.value===""||inputPassword.value === null){
        logInError.innerHTML = "Sorry Input something"
}else{
   
    if(logIn.style.display ="grid"){
        
        logIn.style.display ="none";
        banKing.style.display = "block"
        console.log("Hi Ashru") 
    }
    }
}
submitBtn.addEventListener('click',checkLogin)
// Banking system increase and descrise

let mainBalance = document.querySelector("#bankign .balance span")
let depositBalance = document.querySelector("#bankign .deposit span")
let withdrawBalance = document.querySelector("#bankign .withdraw span")
let depositAmount = document.querySelector("#bankign .deposit input")
let withdrawAmount = document.querySelector("#bankign .withdraw input")
let addBtn = document.querySelector("#bankign .deposit button")
let lessBtn = document.querySelector("#bankign .withdraw button")
let errorDeposit = document.querySelector("#bankign .deposit .error")
let errorwithdraw = document.querySelector("#bankign .withdraw .error")

let add = (a,b)=>{
    return parseInt(a) + parseInt(b);
}

let addMoney = ()=>{
    if(depositAmount.value ===""|| depositAmount.value===null){
        errorDeposit.innerHTML= "Please Inter valid Amount"
    }else{
        errorDeposit.style.display="none"
        let sum = add(depositAmount.value,depositBalance.innerHTML)
        let totalbalance = add(depositAmount.value,mainBalance.innerHTML)
        depositBalance.innerHTML = sum;
         mainBalance.innerHTML = totalbalance;
    }
       
}

let less = (a,b)=>{
    return parseInt(a) - parseInt(b);
}

let lessMoney = ()=>{
    if(withdrawAmount.value === ""||withdrawAmount.value == null){
        errorwithdraw.innerHTML  = "Please Enter Amount";
    }else if(mainBalance.innerHTML<=500){
        errorwithdraw.innerHTML  = "Sorry Insufficient Balance";
    }else{
        errorwithdraw.style.display="none"
        let minus = less(mainBalance.innerHTML,withdrawAmount.value)
        let totalMinus = add(withdrawBalance.innerHTML,withdrawAmount.value)
        withdrawBalance.innerHTML = totalMinus;
        if(minus<=500){
            errorwithdraw.innerHTML  = "Sorry Insufficient Balance";
        }else{
            errorwithdraw.style.display="none"
            mainBalance.innerHTML = minus;
        } 
    }
} 


addBtn.addEventListener('click',addMoney)
lessBtn.addEventListener('click',lessMoney)