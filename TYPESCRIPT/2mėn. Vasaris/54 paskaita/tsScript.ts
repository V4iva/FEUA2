const roulette = document.querySelectorAll<HTMLElement>('.container div')
const btn = document.querySelector('.btn') as HTMLElement
const betButton = document.querySelector('.button') as HTMLElement
const amountBet = document.querySelector('input') as HTMLInputElement
const amountMoney = document.querySelector('.amount') as HTMLElement
const betMoney = document.querySelector('.bet') as HTMLElement
const rollNum = document.querySelector('.rollNum')as HTMLElement
const redcolor = document.querySelectorAll<HTMLElement>('.box')
const blackcolor = document.querySelectorAll<HTMLElement>('.box2')
const redBtn = document.querySelector('.red') as HTMLElement
const blackBtn = document.querySelector('.black') as HTMLElement


const isRollNum:number = Math.round(Math.random()*32)
let betValue:number = 0
let isSelect:boolean = false
let amount:number = 1000

function playRoulette (): void{
    betButton.onclick = () =>{
        betValue = (Number(amountBet.value))
        if (betValue > 0){
            amount -= betValue
            amountMoney.innerHTML = `Amount: ${amount}$`
            betMoney.innerHTML = `Your BET: ${betValue}$`
        }

        roulette.forEach(el => el.onclick = () => {
            isSelect = true
            if (isSelect){
                isSelect = false
                el.style.border = "2px solid gold"
                btn.onclick = () =>{
                    rollNum.innerHTML = `ROLLED NUMBER: ${isRollNum}`
                    if (isRollNum === Number(el.id)){
                        amount += (betValue*2)
                    }
                }
            }
        })
    }
}
playRoulette()