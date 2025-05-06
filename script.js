const formulario = document.getElementById('form');

// evento de submit
formulario.addEventListener('submit', function(e) {
//evita a pagina ser recarregada (reload)
    e.preventDefault();

    const n1 = document.getElementById('n1').value;
    const n2 = document.getElementById('n2').value;
    const mensagem = document.querySelector('.resultado');

    if(n2 > n1) {
        mensagem.innerHTML = '✅ Formulário válido: campo B é maior que campo A';
        mensagem.style.backgroundColor = 'green';
        mensagem.style.color = 'white';
        mensagem.style.margin = '40px'
    } else {
        mensagem.innerHTML = '❌ Formulário inválido: campo B precisa ser maior que campo A';
        mensagem.style.backgroundColor = 'red';
        mensagem.style.color = 'white';
        mensagem.style.margin = '40px';
    }

})