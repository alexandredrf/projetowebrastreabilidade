//FAZENDO A INTEGRAÇÃO COM A API
// Passando "invoice" como parâmetro para que seja pesquisado as infos sobre o pokemon

const palletnumber = document.querySelector('.palletnumber span')

const fetchItem = async (invoice) => {

    // aqui vai o endpoint
    // const APIResponse = await fetch(`http://10.8.0.42:8080/server/application/api/traceability/invoice?invoiceKey=${invoice}`);
    const APIResponse = await fetch(`https://rickandmortyapi.com/api/character/${invoice}`)
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
    
    console.log(data.image)
    }

renderData(`1`)

