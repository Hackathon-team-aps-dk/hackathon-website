const salaryEl = document.getElementById("salary-el")
const rentalEl = document.getElementById("rental-el")
const liabilitiesEl = document.getElementById("loan-el")
const expensesEl = document.getElementById("expenses-el")
const submitBtn = document.getElementById("submit-btn")
const goldEl = document.getElementById("gold-el")
const sipEl = document.getElementById("sip-el")
const ppfEl = document.getElementById("ppf-el")
const stocksEl = document.getElementById("stocks-el")
const cryptoEl = document.getElementById("crypto-el")
const estateEl = document.getElementById("estate-el")
const fdEl = document.getElementById("fd-el")
const debenturesEl = document.getElementById("debentures-el")
const savingsEl = document.getElementById("savings-el")
const shareBox = document.getElementById("shareBox")
const incomeTax = document.getElementById("income-tax")
const shareBoxMobile = document.getElementById("shareBoxMobile")
let slab = 0
let tax = 0

submitBtn.addEventListener('click' , () => {
    if (salaryEl.value.length != 0 && rentalEl.value.length != 0  &&  liabilitiesEl.value.length != 0 && expensesEl.value.length != 0){
    let salary = parseInt(salaryEl.value)
    let rentIncome = parseInt(rentalEl.value)
    let liabilities = parseInt(liabilitiesEl.value)
    let expenses = parseInt(expensesEl.value)
    let netWorth = salary + rentIncome - liabilities

    if (netWorth < 0){
        netWorth = 0
    }

    if (netWorth < 250000){
        slab = 1
        tax = 0
    }

    else if (netWorth < 500000){
        slab = 2
        tax = netWorth * 5/100
    }

    else if (netWorth < 750000){
        slab = 3
        let leftOver = netWorth - 500000
        tax = (leftOver * 20/100) + 12500
    }

    else if (netWorth < 1000000){
        slab = 4
        let leftOver = netWorth - 750000
        tax = (leftOver * 20/100) + 62500
    }

    else if (netWorth < 1250000){
        slab = 5
        let leftOver = netWorth - 1000000
        tax = (leftOver * 30/100) + 112500
    }

    else if (netWorth < 1500000){
        slab = 6
        let leftOver = netWorth - 1250000
        tax = (leftOver * 30/100) + 187500 
    }

    else{
        slab = 7
        let leftOver = netWorth - 1500000
        tax = (leftOver * 30/100) + 262500  
    }

    let gold = (netWorth * 10)/100
    let sip = netWorth * 12 / 100
    let ppf = netWorth * 8 / 100
    let stocks = netWorth * 7 / 100
    let crypto = netWorth*3/100
    let realEstate = netWorth*25/100
    let fd = netWorth*6/100
    let debentures= netWorth*8/100
    netWorth = netWorth-expenses
    let savings = netWorth*21/100
    
    shareBox.style.marginTop = "5000px"
    shareBoxMobile.style.marginTop = "6500px"
    $("#result-el").show();

    goldEl.innerHTML = "Gold, Ammount you should invest in gold = ₹" + gold
    sipEl.innerHTML = "SIPs, Ammount you should invest in sip = ₹" + sip
    ppfEl.innerHTML = "PPF, Ammount you should invest in PPF = ₹" + ppf
    stocksEl.innerHTML = "Stocks, Ammount you should invest in stocks = ₹" + stocks
    cryptoEl.innerHTML = "Cryptocurrency, Ammount you should invest in cryptocurrency = ₹" + crypto
    estateEl.innerHTML = "Real Estate, Ammount you should invest in Real Estate = ₹" + realEstate
    fdEl.innerHTML = "Fixed Deposits, Ammount you should invest in Fixed Deposit = ₹" + fd
    debenturesEl.innerHTML = "Debentures, Ammount you should invest in debentures = ₹" + debentures
    savingsEl.innerHTML = "Savings, You should always hold onto a large chunk of money: ₹" + savings
    incomeTax.innerHTML = "Your salary Stands In Income Tax Slab " + slab + " income tax you need to pay will be " + tax
    }
    else{
        alert("All Required Fields Not Filled!")
    }
})