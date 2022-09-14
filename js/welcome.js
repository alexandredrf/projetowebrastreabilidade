import {SearchButton,
    logoButton,
    navigateToHome,
    navigateToResults} from "./utils.js"


logoButton.addEventListener('click',function(){
    navigateToHome()
})

SearchButton.addEventListener('click',function(){
    navigateToResults()
})


  

