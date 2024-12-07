let play = document.getElementById('play')
let dice1 = document.getElementById('dice1')
let dice2 = document.getElementById('dice2')
let container = document.querySelector('.container')
let rotateDice1 = document.getElementById('dice3')
let rotateDice2 = document.getElementById('dice4')
let rules = document.querySelector('.rules')
let intro = document.querySelector('.intro')
let start = document.getElementById('start')
let total = document.getElementById('total')

const boyImage1 = document.getElementById('boy1')
const boyImage2 = document.getElementById('boy2')
const msg1 = document.getElementById('msg1')
const msg2 = document.getElementById('msg2')



setTimeout(() => {
    msg1.style.display = 'block'

    setTimeout(() => {
        msg1.style.display = 'none'

    },3500)
    
}, 9500);




setTimeout(() => {
    msg2.style.display = 'block'
    setTimeout(() => {
        msg2.style.display = 'none'

    },3500)
    
    
}, 9800);

setTimeout(() => {
    boyImage1.classList.add('animate')
   
    
}, 1000);

setTimeout(() => {
    
    boyImage2.classList.add('animate2')
    
}, 1000);

const diceRoll1 = () => Math.floor(Math.random()*6 +1)

const diceRoll2 = () => Math.floor(Math.random()*6 +1)


const diceSimulation = () => {
  let firstDice =  diceRoll1()
   let secondDice = diceRoll2()

  dice1.innerText = firstDice;
  dice2.innerText = secondDice
  const randomAngle = Math.floor(Math.random() * 360);
  rotateDice1.style.transform = `rotate(${randomAngle}deg)`
  rotateDice2.style.transform = `rotate(${randomAngle}deg)`
  let sum = firstDice + secondDice;
 
  if(sum === 7 || sum === 11){
    return total.innerText= "Winner"
   
    
}else if(sum === 2 || sum === 3 || sum === 12){
    return total.innerText = "Loser"
   
    
}else{
    return total.innerText ="Again roll the dice"
    
    
}
  

}
const result = diceSimulation()



play.addEventListener('click',diceSimulation)



// --------------------------------------------------------------

const startGame = () => {
    intro.style.display = 'none'; 
   rules.style.display = 'block';
}
start.addEventListener('click',startGame)