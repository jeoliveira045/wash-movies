import {Video} from "../domain/Video";

export function VideoObjectList(){
  let video1: Video = {
    id: 1,
    nome: "Chamas da Vingança",
    genero: "Drama",
    subgenero: "Ação",
    imagem: "assets/chamas-da-vingança.png"
  }
  let video2: Video = {
    id: 2,
    nome: "Goosebumps",
    genero: "Infantil",
    subgenero: "Terror",
    imagem: "assets/goosebumps.png"
  }
  let video3: Video = {
    id: 3,
    nome: "O Livro de Eli",
    genero: "Drama",
    subgenero: "Ação",
    imagem: "assets/o-livro-de-eli.png"
  }
  let video4: Video = {
    id: 3,
    nome: "Rick and Morty",
    genero: "Comédia",
    subgenero: "Aventura",
    imagem: "assets/rick-and-morty.png"
  }
  return new Array<Video>(video1, video2, video3, video4)
}

