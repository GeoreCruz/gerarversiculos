const mensagem = document.querySelector('#mensagem');
const meuBotao = document.querySelector('#botao');

meuBotao.addEventListener('click', function(){
mensagem.innerHTML = 'Você clicou no botão!'
})