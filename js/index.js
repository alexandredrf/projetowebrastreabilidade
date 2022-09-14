import {loginButton, logoButton, navigateToHome,navigateToWelcomePage,SearchButton} from "./utils.js"

loginButton.addEventListener('click',function(){

    console.log("O botão funcionou")
    navigateToWelcomePage()
})

logoButton.addEventListener('click',function(){

    // navigateToHome()
    console.log(SearchButton==loginButton)

}) 