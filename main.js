const start    = document.querySelector('.start');
const quiz     = document.querySelector('.quiz');
const btnStart = document.querySelector('#btn');
const btnNext  = document.querySelector('.next');
const num1     = document.querySelector('.num1');
const num2     = document.querySelector('.num2');
const score_el = document.querySelector('#kol_val');

let kol = score = 0;
let val,rand;
let val1,val2
btnStart.addEventListener('click', ()=>{
        start.classList.add('hide');
        quiz.classList.remove('hide');
        val1 = randomInteger(1,10);
        val2 = randomInteger(1,10);
        num1.innerHTML = val1;
        num2.innerHTML = val2;
});
function randomInteger(min, max) {
        rand = min + Math.random() * (max - min)
        rand = Math.round(rand);
        return rand;
}

btnNext.addEventListener('click', init)

function init() { 
    num1.innerHTML = val1;
    num2.innerHTML = val2;
    let inp_val = document.querySelector('input');
    inp_val = parseInt(inp_val.value)
    val = val1+val2
    if (inp_val == val){
        
        score++
        score_el.innerHTML = score;
        val1 = randomInteger(1,10);
        val2 = randomInteger(1,10);
        
        init()
        
        
    }
}