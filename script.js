const resultado = document.querySelector('.screen');
const confirmar = document.querySelector('.equal');


function insert(valor){
    resultado.innerHTML += valor;
}

function clean(){
    resultado.innerHTML = '';
}

function backspace(){
    if(resultado.textContent){
        let screen = document.getElementById('result').innerHTML
        resultado.innerHTML = screen.substring(0, screen.length - 1);
    }
}

function confirma(){
    if(resultado.textContent != 'Erro'){
        document.getElementById("result").innerHTML = eval(resultado.innerHTML);
    }
}