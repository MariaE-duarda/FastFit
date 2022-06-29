function funcao(){
    alert('Foi clicado')
}

function pedido(){
    alert('Fez um pedido.')
}

function boaComida(){
    alert("Se interessou em nossos pratos? \nVeja nosso cardápio! Basta clicar no botão abaixo.");
}


function mensagem() {
    nome = document.getElementById('name').value;
    email = document.getElementById('email').value;
    mensagens = document.getElementById('mensagem').value;

    if (nome == ""){
        alert('Informe seu NOME antes de fazer o envio da mensagem!')
        nome.focus()
    }
    if (email == ""){
        alert('É necessário informar seu E-MAIL, ' + nome+'.')
    }
    if (mensagens == ""){
        alert('Não se esqueça de nos mandar seu informe, ' + nome+'.')
    }
    else{
        confirm(nome+ ', sua mensagem foi enviada com sucesso.')
    }

}

function conferir(){
    nome = document.getElementById('btn');
    email = document.getElementById('email');
    mensagens = document.getElementById('mensagem');

        if(nome.value != ""){
            div.classList.add('secActive');
        }else{
            div.classList.remove('secActive');
        }

}


