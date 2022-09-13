// link no logo
const logoButton = document.querySelector('.bglogo img')

logoButton.addEventListener('click',function(){

    console.log("O botão funcionou")
    window.location.href = './index.html'

}) 

const newSearch = document.querySelector('header button')

newSearch.addEventListener('click',function(){

    console.log("O botão funcionou")
    window.location.href = './results.html'

}) 

//FAZENDO A INTEGRAÇÃO COM A API
// Passando "invoice" como parâmetro para que seja pesquisado as infos sobre o pokemon

const palletNumber = document.querySelector('.palletnumber span')
const supplierName = document.querySelector('.percentage').getElementsByTagName('p')[0]
const lotNumber = document.querySelector('.percentage').getElementsByTagName('p')[1]
const percentage = document.querySelector('.percentage').getElementsByTagName('p')[2]
const imgLogo = document.querySelector('.clienteimg img')

const palletNumber2 = document.getElementsByClassName('palletnumber')[1].querySelector('span')

const fetchItem = async (invoice) => {

    // aqui vai o endpoint
    const APIResponse = await fetch(`http://10.1.1.148:8080/server/application/api/traceability/invoice?invoiceKey=${invoice}`);
    //const APIResponse = await fetch(`https://rickandmortyapi.com/api/character/${invoice}`)
    // Tratando
    // Se o invoice for ok, o status da resposta é 200. Então, ele é válido
    // if(APIResponse.status ===200){
    //     // Atribuindo em data os dados extraidos da api só que transformados em jso
    // }
    const data = await APIResponse.json();
    return data
}

const renderData = async (id) => {

    const data = await fetchItem(id)
    palletNumber.innerHTML = `Pallet number: ${data[0].productionOrderNumber}`
    supplierName.innerHTML = `Supplier: ${data[0].supplierName}`
    lotNumber.innerHTML = `Lot number: ${data[0].lotNumber}`
    percentage.innerHTML = `Percentage: ${data[0].percentage}`
    // imgLogo.src = data.image
    // console.log(data.image)
    }

renderData(`43220492632512000199550020000440561001165078`)

// const renderData2 = async (id) => {

//     const data = await fetchItem(id)
//     palletNumber2.innerHTML = `Pallet number: ${data.name}`
//     supplierName.innerHTML = `Supplier: ${data.status}`
//     lotNumber.innerHTML = `Lot number: ${data.id}`
//     percentage.innerHTML = `Percentage: ${data.gender}`
//     imgLogo.src = data.image
//     console.log(data.image)
//     }

// renderData2(`182`)
// palletNumber.innerHTML = 
// `<div class="palletnumber">
//     <span>Pallet number: ${data[0].productionOrderNumber}</span>
//     <div class="container">
//     <div class="percentage">
//     <div class="ans"><img src="./img/leather.png" alt="supply"><p></p></div>
//     <div class="ans"><img src="./img/binary-code2.png" alt="supply"><p></p></div>
//     <div class="ans"><img src="./img/percentage.png" alt="supply"><p></p></div>
//     <div class="ans"><img src="./img/anexoicon.png" class ="download" alt="supply"><p>Download files</p></div>
//     </div>
//     <!-- <img src="./img/anexoicon2.png" alt="ícone anexo"> -->
//     </div>
// </div>`