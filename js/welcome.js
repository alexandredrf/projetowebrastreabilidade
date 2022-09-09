const SearchButton = document.querySelector('button')

SearchButton.addEventListener('click',function(){

    console.log("O botão funcionou")
    window.location.href = '/results.html'

}) 

const logoButton = document.querySelector('.bglogo img')

logoButton.addEventListener('click',function(){

    console.log("O botão funcionou")
    window.location.href = './index.html'

}) 