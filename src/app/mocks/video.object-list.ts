import {Video} from "../domain/Video";

export function VideoObjectList(){
  let video1: Video = {
    id: 1,
    nome: "Chamas da Vingança",
    genero: "Drama",
    subgenero: "Ação",
    imagem: "assets/chamas-da-vingança.png",
    descricao: "Um ex-agente da CIA reluta, mas acaba topando trabalhar como guarda-costas de uma menina na Cidade do México e faz de tudo para salvá-la quando ela é sequestrada. Assista o quanto quiser. O vencedor do Oscar Denzel Washington e Dakota Fanning estrelam este suspense de ação com Christopher Walken."
  }
  let video2: Video = {
    id: 2,
    nome: "Goosebumps",
    genero: "Infantil",
    subgenero: "Terror",
    imagem: "assets/goosebumps.png",
    descricao: "A nova série do Disney+ acompanha um grupo de cinco jovens amigos que vivem em uma cidade pequena chamada Port Lawrence. um dia, eles descobrem segredos do passado trágico de um adolescente chamado Harold Biddle, morto trinta anos antes.Depois de uma festa de Halloween na casa dos Biddle, os adolescentes encaram uma nova realidade assombrosa, se unem para salvar a cidade, e passam a conhecer melhor seus pais e uns aos outros."
  }
  let video3: Video = {
    id: 3,
    nome: "O Livro de Eli",
    genero: "Drama",
    subgenero: "Ação",
    imagem: "assets/o-livro-de-eli.png",
    descricao: "Trinta anos depois da guerra ter dizimado o mundo, um guerreiro solitário chamado Eli caminha por horizontes arruinados dando esperança para os que restaram. Apenas um outro homem compreende o poder de um livro que Eli carrega e está determinado a se apoderar dele. Apesar de Eli preferir a paz, ele arriscará a sua vida para proteger a sua carga preciosa, pois precisa cumprir o seu destino de ajudar a restaurar a humanidade."
  }
  let video4: Video = {
    id: 4,
    nome: "Rick and Morty",
    genero: "Comédia",
    subgenero: "Aventura",
    imagem: "assets/rick-and-morty.png",
    descricao: "Acompanhe malucas viagens no tempo-espaço e por universos paralelos com Rick, um cientista com problemas com a bebida, e seu neto Morty, um adolescente não tão brilhante quanto o avô."
  }
  return new Array<Video>(video1, video2, video3, video4)
}

