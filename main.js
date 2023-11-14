
// const input = document.getElementById('input')


const API = 'https://type.fit/api/quotes'
const btn = document.querySelector('button')



async function getQuotes(){
    const request = await fetch(API)
    const response = await request.json()
    quotes = response
    let randomNumber = Math.floor(Math.random()*10)
    document.querySelector('h2').textContent = quotes[randomNumber].text
}

getQuotes();


btn.addEventListener('click', ()=>{
    getQuotes();
})
