const btn = document.querySelector('button');
const text = document.querySelector('.advice-text');
const number = document.querySelector('.number')

const API_LINK = 'https://api.adviceslip.com/advice';

const getAdvice = () => {
fetch(API_LINK)
.then(res => res.json())
.then(data => 
   (text.textContent= data.slip.advice, number.textContent = data.slip.id))
.catch(err => console.error(err))
}
document.addEventListener("DOMContentLoaded", getAdvice)
btn.addEventListener("click", getAdvice)
