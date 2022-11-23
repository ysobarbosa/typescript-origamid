"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
let produto = "Livro";
let preco = 200;
const carro = {
    marca: 'Audi',
    portas: 5
};
const barato = preco < 400 ? true : 'produto caro';
console.log(barato);
function somar(a, b) {
    return a + b;
}
somar(3, 2);
const nintendo = {
    nome: 'Nintendo',
    preco: '2000'
};
function transformarPreco(produto) {
    produto.preco = 'R$ ' + produto.preco;
    return produto;
}
const produtoNovo = transformarPreco(nintendo);
console.log(produtoNovo);
// Exercícios
function normalizarTexto(texto) {
    return texto.trim().toLowerCase();
}
console.log(normalizarTexto(" DeSign etc"));
// Exercicio 2
const input = document.querySelector('input');
const total = localStorage.getItem('total');
if (input && total) {
    input.value = total;
    calcularGanho(+input.value);
}
function calcularGanho(value) {
    const p = document.querySelector('p');
    if (p) {
        p.innerText = `ganho total: ${value + 100 - value * 0.2}`;
    }
}
function totalMudou() {
    if (input) {
        localStorage.setItem('total', input.value);
        calcularGanho(Number(input.value));
    }
}
if (input) {
    input.addEventListener('keyup', totalMudou);
}
// Exercicio 3
function toNumber(item) {
    if (typeof item == "number") {
        return item;
    }
    else if (typeof item == "string") {
        return Number(item);
    }
    else {
        throw "Value deve ser um número ou uma string";
    }
}
const funcao = toNumber("a");
console.log(funcao);
function preencherDados(dados) {
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
});
preencherDados({
    nome: 'Celular',
    preco: 1300,
    teclado: false
});
function pintarCategoria(categoria) {
    console.log(categoria);
    if (categoria == 'design') {
        console.log('Pintar vermelho');
    }
}
pintarCategoria("design");
function fetchProduct() {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch("https://api.origamid.dev/json/notebook.json");
        const data = yield response.json();
        console.log(data);
        showProduct(data);
    });
}
fetchProduct();
function showProduct(data) {
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
    `;
}
// Arrays
const numeros = [10, 20, 30, 40, 50, 3];
const valores = [10, 'Taxas', 30, 'Produto', 50, 3];
function maiorque10(data) {
    return data.filter(n => n > 10);
}
function filtrarValores(data) {
    return data.filter(item => typeof item == 'number');
}
console.log(filtrarValores(valores));
console.log(maiorque10(numeros));
const dados = [
    ['senhor dos aneis', 80],
    ['a guerra dos tronos', 120]
];
function fetchCursos() {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch('https://api.origamid.dev/json/cursos.json');
        const data = yield response.json();
        mostrarCursos(data);
        console.log(data);
    });
}
fetchCursos();
function mostrarCursos(cursos) {
    cursos.forEach(element => {
        let color;
        if (element.nivel === 'iniciante') {
            color = 'blue';
        }
        else if (element.nivel === 'avancado') {
            color = 'red';
        }
        document.body.innerHTML +=
            `<div>
                <h1 style="color: ${color}">${element.nome}</h1>
                <p> ${element.nivel}</p>
        </div>
        `;
    });
}
function normalizar(texto) {
    return texto.trim().toLowerCase();
}
console.log(normalizar(' dEsign '));
function fetchJson(url) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch(url);
        const data = yield response.json();
        manipularData(data);
    });
}
fetchJson('https://api.origamid.dev/json/cursos.json');
function manipularData(data) {
    console.log(data.nome);
}
const button = document.querySelector('button');
const config = localStorage.getItem('config');
console.log(button === null || button === void 0 ? void 0 : button.click());
let totall;
console.log(totall);
