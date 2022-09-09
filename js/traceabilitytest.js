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
    // const APIResponse = await fetch(`http://10.1.1.148/:8080/server/application/api/traceability/invoice?invoiceKey=${invoice}`);
    const APIResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${invoice}`)
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
    palletNumber.innerHTML = `Nome do Pokemon: ${data.name}`
    supplierName.innerHTML = `Supplier: ${data.supplierName}`
    lotNumber.innerHTML = `Lot number: ${data.lotNumber}`
    percentage.innerHTML = `Percentage: ${data.percentage}`
    imgLogo.src = data.sprites.other[2].official-artwork.front_default
    // console.log(data.image)
    }

renderData(`7`)

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
