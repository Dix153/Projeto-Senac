
const abas = document.getElementById('abas');
const filmes = document.getElementById('filmes');


abas.addEventListener('click', (e) => {
  if (e.target.classList.contains('aba')) {
    selecionarAba(e.target.dataset.aba);
  }
});


function selecionarAba(categoria) {
 
  const abasSelecionadas = document.querySelectorAll('.aba.selecionada');
  abasSelecionadas.forEach((aba) => aba.classList.remove('selecionada'));

  
  const abaClicada = document.querySelector(`.aba[data-aba="${categoria}"]`);
  abaClicada.classList.add('selecionada');

 
  const filmesSelecionados = document.querySelectorAll('.filme');
  filmesSelecionados.forEach((filme) => {
    if (filme.dataset.categoria === categoria) {
      filme.classList.add('selecionado');
    } else {
      filme.classList.remove('selecionado');
    }
  });
}

