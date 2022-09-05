//FAZENDO A INTEGRAÇÃO COM A API
// Passando "invoice" como parâmetro para que seja pesquisado as infos sobre o pokemon
export const fetchPokemon = async (invoice) => {

    // aqui vai o endpoint
    const APIResponse = await fetch(`http://10.8.0.42:8080/server/application/api/traceability/invoice?invoiceKey=${invoice}`);

    // Tratando
    // Se o invoice for ok, o status da resposta é 200. Então, ele é válido
    if(APIResponse.status ===200){
        // Atribuindo em data os dados extraidos da api só que transformados em json
    const data = await APIResponse.json();
    return data
    }
}

//-------------> this é como estou chamando funções dentro escopo

//classe que vai ter toda a nossa lógica
export class Favorites {
    constructor(root){ //o #app vai vir parar aqui 
        //root é a div app
        this.root = document.querySelector(root)
        //ele vai procurar em todo o nosso document (página) e a #app e vai definir como root

        //vamos procurar dentro da #app (root) a tbody
        //o tbody vai ficar aqui, pois irá ser chamado mais de uma vez
        this.tbody = this.root.querySelector('table tbody')
        this.load()
    }

    load(){
        //agora vamos utilizar a API do browser de localstorage
        //console.log(entries)
        this.entries = JSON.parse(localStorage.getItem('@github-Favorites:')) || []
        //JSON.parse = JSON é um tipo que retorna algumas funcionalidades para trabalhar com o tipo de dado.
        //Já o PARSE modifica o JSON para um objeto que está dentro do JSON
        // ou seja , transforma em um array de verdade , se nã otivesse o JSON, ele seria somente uma string
        // o || [] = caso ele esteja vazio, retorna um arrey vazio

    }

    save(){
        localStorage.setItem('@github-Favorites:', JSON.stringify(this.entries))
        //JSON.stringify = transforma um objeto que está no JS para um objeto do tipo JSON em forma de string
    }

    //Essa função é uma função assíncrona 
    //o JS não roda essa função até que as promessas tenham sido retornadas
    async add(username){
        //console.log(username)
        try{

        //checando se já exite cadastrado
        const userExist = this.entries.find(entry => entry.login === username)
        if (userExist){
            throw new Error ('Usuário já cadastrado') //throw (jogar o erro)
        }
        
        const user = await GithubUser.search(username)

        //USUÁRIO NÃO EXISTIR
        if(user.login === undefined) {
            throw new Error ('Usuário não encontrado') //throw (jogar o erro) e o Catch (captura o erro)
        }
        //se existir, vamos adicionar 
        this.entries = [user, ...this.entries] //... mantem o que já tem no entries. antes de todos.se quisesse colocar no fim seria ...this.entries, user
        this.update() 
        this.save()
    } 
        catch(e) {
            alert(e.message)
    }
}
    
    //FUNÇÃO DE DELETAR
    
    delete(pessoa){
        //como entries está no escopo "global" e entries é um arrey ele aceita propriedades de arrey
        //filter é uma função de high order assim como : MAP, FILTER , FIND, REDUCE...
        const filteredEntries = this.entries.filter(entry => entry.login !== pessoa.login) //teste lógico ele busca tudo o que é diferente do selecionado.
        
        //console.log(filteredEntries)
        //filter() = me da todas as extras exceto a que está dentro do filtro
        this.entries = filteredEntries
        this.update()
        this.save()
    }
}

//aqui vai ser a classe que vai gerar a visualização e eventos desse html
//Atraves do extends é que está conseguindo unir as duas classes , busca tudo o que tem dentro da classe favorites
export class traceability extends traceability {

    constructor(root){  //esse root vai ser equivalente ao #app
        super(root) //serve para fazer o "link" entre as duas classes. o super vai manter o link entre as classes 
        //console.log(this.root) //imprimir a variável, em tese imprime #app
        this.update()
        this.onadd()
    }

    //cria o html
    //toda vez que for mudado um dado,uma função vai ser chamada

    onadd () {
        const addButton = this.root.querySelector('.search button')

        addButton.onclick = () => {
            //quando clicado no botão será capturado o dado digitado no input
            //o input possui a propriedade value
            const value = this.root.querySelector('.search input').value
            //console.log(value)
            this.add(value) //pegar o value e jogar dentro da função add
        }
    }

    update() {

        this.removeAllTr()

        //recriar as colunas
        //os dados serão um ARRAY que vão conter um OBJETO com as informações no seu interior

        this.entries.forEach(pessoa => { //o nome user foi atribuído por mim
        //console.log(user)
        //dentro de cada linha,será necessário levar os dados contidos no entries
        const row = this.createRow() //aqui ele vai te retornar a TR criada pela DOM
        //console.log(row)
        
        //REATRIBUINDO
        row.querySelector('.user img').src = `https://github.com/${pessoa.login}.png` //user se vincula a classe no html
        row.querySelector('.user img').alt = `imagem de ${pessoa.name}`
        row.querySelector('.user a').href = `https://github.com/${pessoa.login}`
        row.querySelector('.user p').textContent = pessoa.name
        row.querySelector('.user span').textContent = pessoa.login

        row.querySelector('.repositories').textContent = pessoa.public_repos
        row.querySelector('.followers').textContent = pessoa.followers

        //ele ta funcionando porem ele ta puxando dentro do arrey entries

        row.querySelector('.remove').onclick = () => {
            const isOK = confirm('Tem certeza que deseja deletar essa linha?')

            if (isOK){
                this.delete(pessoa)
            }
        
        }


        //Append que é uma funcionalidade da DOM que vai receber um elemento HTML criado pela DOM
        this.tbody.append(row)

        //tr foi criado pela DOM durante a função createrow
        //tr foi para dentro da contante row
        //a Constante row fez a pesquisa (queryselector) pra trocar a imagem
        //append ta botando row dentro de tbody


        })
    }



    createRow(){
    //Recriar as colunas
    //tr vai receber os dados que vamos pegar do html
    // para recriar uma TR, ela precisa ser criada com a DOM! https://developer.mozilla.org/pt-BR/docs/Web/API/Document_Object_Model/Introduction
    // criando um elemento diretamente pela DOM utilizando JS
    const tr = document.createElement('tr')
    
    //o que é innerHTML?!
    // substitui o que tem dentro de um elemento por algo , nesse caso tr era vazio e assumiu o valor do texto da variável content

    tr.innerHTML =`
                    <!-- Referente a coluna usuário do thead  -->
                    <td class="user">
                        <img src="https://github.com/alexandredrf.png" alt="Imagem do Alexandre">
                        <a href="https://github.com/alexandredrf" target="_blank">
                            <p>Alexandre Davi</p>
                            <span>alexandredrf</span>
                        </a>
                    </td>
                    <!-- Referente a coluna repositório do thead  -->
                    <td class="repositories">
                        50
                    </td>
                    <!-- referente aos seguidores  -->
                    <td class="followers">
                        16000
                    </td>
                    <!-- referente ao botão de fechar  -->
                    <td>
                        <button class="remove">&times;</button>
                    </td>
                    `
    return tr
    //pq retornar tr ? pq vai ser utilizado pra abastercer a div tr no html
    }

    
    removeAllTr(){

            //entrar dentro da table tbody e pegar os seletores TR -  // como se pegasse então #app table tbody tr.
            
            this.tbody.querySelectorAll('tr')
                .forEach((tr) => { //função forEach - "para cara tr" será executado o comando abaixo 
                    //console.log(tr) //plota no console
                tr.remove() //remove é uma função nativa do JS ela remove o tr
                })
            }



}