"use strict";
const roulette = document.querySelectorAll('.container div');
const btn = document.querySelector('.btn');
const betButton = document.querySelector('.button');
const amountBet = document.querySelector('input');
const amountMoney = document.querySelector('.amount');
const betMoney = document.querySelector('.bet');
const rollNum = document.querySelector('.rollNum');
const redcolor = document.querySelectorAll('.box');
const blackcolor = document.querySelectorAll('.box2');
const redBtn = document.querySelector('.red');
const blackBtn = document.querySelector('.black');
const isRollNum = Math.round(Math.random() * 32);
let betValue = 0;
let isSelect = false;
let amount = 1000;
function playRoulette() {
    betButton.onclick = () => {
        betValue = (Number(amountBet.value));
        if (betValue > 0) {
            amount -= betValue;
            amountMoney.innerHTML = `Amount: ${amount}$`;
            betMoney.innerHTML = `Your BET: ${betValue}$`;
        }
        roulette.forEach(el => el.onclick = () => {
            isSelect = true;
            if (isSelect) {
                isSelect = false;
                el.style.border = "2px solid gold";
                btn.onclick = () => {
                    rollNum.innerHTML = `ROLLED NUMBER: ${isRollNum}`;
                    if (isRollNum === Number(el.id)) {
                        amount += (betValue * 2);
                    }
                };
            }
        });
    };
}
playRoulette();
