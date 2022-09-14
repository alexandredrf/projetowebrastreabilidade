import { logoButton,
    navigateToHome,
    navigateToResults,
    newSearch,
    farm} from './utils.js'

logoButton.addEventListener('click',function(){
   navigateToHome()
}) 


const h4 = document.querySelector('h4')

newSearch.addEventListener('click',function(){
    const valor = document.querySelector('input').value
    const option = document.querySelector('#event-category').value
    console.log(valor)
    h4.innerHTML = `${option} ${valor}`
    renderData(valor)
}) 

//------------------------------------popup

function iniciaModal(modalID){
    const modal = document.getElementById(modalID)
    if(modal){
    modal.classList.add('show');
    modal.addEventListener('click', (e) => {
        if(e.target.id == modalID || e.target.className == 'close') {
            modal.classList.remove('show')
        }
    });
   }   
}
for( let i=0 ; i<farm.length; i++){
farm[i].addEventListener('click',function(){
    iniciaModal('container-farm')
    })
}
//------------------------------------popup



//FAZENDO A INTEGRAÇÃO COM A API
// Passando "invoice" como parâmetro para que seja pesquisado as infos sobre o pokemon

const palletNumber = document.querySelector('.palletnumber span')
const supplierName = document.querySelector('.percentage').getElementsByTagName('p')[0]
const lotNumber = document.querySelector('.percentage').getElementsByTagName('p')[1]
const percentage = document.querySelector('.percentage').getElementsByTagName('p')[2]


const fetchItem = async (invoice) => {

    // aqui vai o endpoint
    const APIResponse = await fetch(`http://10.1.1.148:8080/server/application/api/traceability/invoice?invoiceKey=${invoice}`);
    //const APIResponse = await fetch(`https://rickandmortyapi.com/api/character/${invoice}`)
    // Tratando
    // Se o invoice for ok, o status da resposta é 200. Então, ele é válido
    if(APIResponse.status === 200){
        const data = await APIResponse.json();
        return data
        // Atribuindo em data os dados extraidos da api só que transformados em jso
    } else console.log(APIResponse.status)

}

const renderData = async (id) => {

    const data = await fetchItem(id)
    palletNumber.innerHTML = `Pallet number: ${data[0].productionOrderNumber}`
    supplierName.innerHTML = `Supplier: ${data[0].supplierName}`
    lotNumber.innerHTML = `Lot number: ${data[0].lotNumber}`
    percentage.innerHTML = `Percentage: ${data[0].percentage}`

    }

renderData(`43220492632512000199550020000440561001165078`)


