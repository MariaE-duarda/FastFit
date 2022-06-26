function funcao(){
    alert('Foi clicado')
}

function pedido(){
    alert('Fez um pedido.')
}

function boaComida01(){
    if(confirm("Gostou do Mousse de Maracujá? \nFaça seu pedido conosco!")){
            window.location="pedido.html";
    }
}

function boaComida02(){
     if(confirm("Gostou do Pudim Fit? \nFaça seu pedido conosco!")){
             window.location="pedido.html";
     }
 }

 function boaComida03(){
     if(confirm("Gostou do Sufle de banana? \nFaça seu pedido conosco!")){
             window.location="pedido.html";
     }
 }

 function boaComida04(){
     if(confirm("Gostou do Petit gâteau fit? \nFaça seu pedido conosco!")){
             window.location="pedido.html";
     }
 }

 function boaComida05(){
     if(confirm("Gostou do Crème Brûlée? \nFaça seu pedido conosco!")){
             window.location="pedido.html";
     }
 }

 function boaComida06(){
     if(confirm("Gostou do Bolo de Chuva fit? \nFaça seu pedido conosco!")){
             window.location="pedido.html";
     }
 }

 function boaComida07(){
     if(confirm("Gostou do Mousse de limão? \nFaça seu pedido conosco!")){
             window.location="pedido.html";
     }
 }

 function boaComida08(){
     if(confirm("Gostou do Sanduíche funcional? \nFaça seu pedido conosco!")){
             window.location="pedido.html";
     }
 }

 function boaComida09(){
     if(confirm("Gostou do Empadão Fit? \nFaça seu pedido conosco!")){
             window.location="pedido.html";
     }
 }

 function boaComida10(){
     if(confirm("Gostou do Omelete de carne? \nFaça seu pedido conosco!")){
             window.location="pedido.html";
     }
 }

 function boaComida11(){
     if(confirm("Gostou do Panqueca de frango? \nFaça seu pedido conosco!")){
             window.location="pedido.html";
     }
 }

 function boaComida12(){
     if(confirm("Gostou do Pizza de frango? \nFaça seu pedido conosco!")){
             window.location="pedido.html";
     }
 }

 function boaComida13(){
     if(confirm("Gostou do Hambúguer Fit? \nFaça seu pedido conosco!")){
             window.location="pedido.html";
     }
 }

 function boaComida14(){
     if(confirm("Gostou do Batata Assada? \nFaça seu pedido conosco!")){
             window.location="pedido.html";
     }
 }

 function boaComida15(){
     if(confirm("Gostou do Croissant? \nFaça seu pedido conosco!")){
             window.location="pedido.html";
     }
 }
 
function mensagem() {
    nome = document.getElementById('name').value;
    email = document.getElementById('email').value;
    mensagens = document.getElementById('mensagem').value;

    if (nome == ""){
        alert('Informe o nome antes de fazer o envio da mensagem!')
        nome.focus()
    }
    if (email == ""){
        alert('É necessário informar o e-mail!')
    }
    if (mensagens == ""){
        alert('Não se esqueça de nos mandar seu informe, ' + nome)
    }
    else{
        confirm('Mensagem enviada com sucesso, '+ nome)
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


