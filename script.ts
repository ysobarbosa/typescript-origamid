let produto: string = "Livro";
let preco: number = 200;

const carro = {
    marca: 'Audi',
    portas: 5
}

const barato = preco < 400 ? true : 'produto caro';

console.log(barato)

function somar(a: number, b: number) {
    return a + b;
}

somar(3,2)

const nintendo = {
    nome: 'Nintendo',
    preco: '2000'
}

function transformarPreco(produto: {nome: string; preco: string; }) {
    produto.preco = 'R$ ' + produto.preco;
    return produto

}

const produtoNovo = transformarPreco(nintendo);
console.log(produtoNovo)

// Exercícios 

function normalizarTexto(texto: string) {
    return texto.trim().toLowerCase();
}

console.log(normalizarTexto(" DeSign etc"))

// Exercicio 2

const input = document.querySelector('input')

const total = localStorage.getItem('total')

if (input && total) {
    input.value = total
    calcularGanho(+input.value)
}


function calcularGanho(value: number) {
    const p = document.querySelector('p');
    
    if (p) {
        p.innerText = `ganho total: ${value + 100 - value * 0.2}`
    }
}

function totalMudou(){
    if(input) {
    localStorage.setItem('total', input.value)
    calcularGanho(Number(input.value))
    }
}

if (input) {
    input.addEventListener('keyup', totalMudou)

}

// Exercicio 3 

function toNumber(item: number | string) {
    if(typeof item == "number") {
        return item;
    } else if (typeof item == "string") {
        return Number(item)
    } else {
        throw "Value deve ser um número ou uma string"
    }
}

const funcao = toNumber("a")
console.log(funcao)

type NumberOrString = string | number;

interface Produto {nome: string; preco: number; teclado: boolean}

function preencherDados(dados: Produto) {
    document.body.innerHTML += `
    
    <div>
        <h2>${dados.nome}</h2>
        <p> R$ ${dados.preco} </p>
        <p> Inclui teclado: ${dados.teclado ? 'sim' : 'não'}
    </div>
    
    `;
}

preencherDados({
    nome: 'Computador',
    preco: 12,
    teclado: true
})

preencherDados({
    nome: 'Celular',
    preco: 1300,
    teclado: false
})

type Categorias = "design" | "codigo" | "descod";

function pintarCategoria(categoria: Categorias) {
    console.log(categoria)
    if (categoria == 'design') {
        console.log('Pintar vermelho')
    }
}

pintarCategoria("design")

async function fetchProduct() {
    const response = await fetch("https://api.origamid.dev/json/notebook.json");
    const data = await response.json();
    console.log(data)
    showProduct(data)

}

fetchProduct()

interface Product  {
    nome: string;
    descricao: string;
    preco: number;
    garantia: string;
    seguroAcidentes: boolean;
    empresaFabricante: Empresa;
    empresaMontadora: Empresa;

}



interface Empresa {
    fundacao: number;
    nome: string;
    pais: string;
}

function showProduct(data: Product) {
    document.body.innerHTML = `
        <div>
            <h2> ${data.nome}</h2>
            <p> ${data.preco} <p/>
            
            <div>
                <h3> Fabricante: ${data.empresaFabricante.nome}</h3>
            </div>
            <div>
                <h3> Montadora: ${data.empresaMontadora.nome}</h3>
            </div>
        </div>
    `

}