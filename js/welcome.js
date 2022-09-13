const SearchButton = document.querySelector('button')


const input = document.querySelector('input')

SearchButton.addEventListener('click',function(){


const value = input.value
console.log(value)


window.location.href = '/results.html'

}) 


const logoButton = document.querySelector('.bglogo img')

logoButton.addEventListener('click',function(){

    console.log("O botão funcionou")
    window.location.href = './index.html'

})


