// function adicionarFilme() {
//   let FilmeFavorito = document.getElementById("filme").value;
//   let listaFilmes = document.getElementById("listaFilmes");

//   for (let filmes of lista_filmes) {
//     let elementoFilme = `<img src="${FilmeFavorito}"/>`;
//     listaFilmes.innerHTML = elementoFilme;
//   }
// }

function Recarregar() {
    document.location.reload(true);
}

function adicionarFilme() {
    let filmeFavorito = document.getElementById("filme").value;
    if (filmeFavorito.endsWith(".jpg")) {
      listarFilmesNaTela(filmeFavorito);
    } else {
      alert("Apenas URL terminadas em extensão jpg");
    }
    document.getElementById("filme") = "";
  }
  
  function listarFilmesNaTela(filme) {
    let elementoFilmeFavorito = `<img src="${filme}"/>`;
    let elementoListaFilmes = document.getElementById("listaFilmes");
    elementoListaFilmes.innerHTML =
      elementoListaFilmes.innerHTML + elementoFilmeFavorito;
  }
  