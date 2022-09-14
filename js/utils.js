
// Constantes que utilizo na indexe
export const loginButton = document.querySelector('button')
export const logoButton = document.querySelector('.bglogo img')

//constantes que utilizo na welcome
export const SearchButton = document.querySelector('button')
export const input = document.querySelector('input')

//constante que utilizo na traceability
export const newSearch = document.querySelector('header button')
export const farm = document.querySelectorAll('#farm') //variável do pop up

export function navigateToWelcomePage() {
    window.location.href = './welcome.html'
}

export function navigateToHome() {
    window.location.href = './index.html'
}

export function navigateToResults () {
    window.location.href = './results.html'
}