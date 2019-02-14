import React from "react";

class ListaCartao extends React.Component {

  let noticias = [
    {titulo:'Titulo 1', descricao:'descrição 1', detalhe:'detalhe 1', imagem:'https://pbs.twimg.com/profile_images/711520911082569728/CZvvAEVD.jpg', link:'#link'},
    {titulo:'Titulo 2', descricao:'descrição 2', detalhe:'detalhe 2', imagem:'https://pbs.twimg.com/profile_images/711520911082569728/CZvvAEVD.jpg', link:'#link'},
    {titulo:'Titulo 3', descricao:'descrição 3', detalhe:'detalhe 3', imagem:'https://pbs.twimg.com/profile_images/711520911082569728/CZvvAEVD.jpg', link:'#link'},
    {titulo:'Titulo 4', descricao:'descrição 4', detalhe:'detalhe 4', imagem:'https://pbs.twimg.com/profile_images/711520911082569728/CZvvAEVD.jpg', link:'#link'},
    {titulo:'Titulo 5', descricao:'descrição 5', detalhe:'detalhe 5', imagem:'https://pbs.twimg.com/profile_images/711520911082569728/CZvvAEVD.jpg', link:'#link'},
    {titulo:'Titulo 6', descricao:'descrição 6', detalhe:'detalhe 6', imagem:'https://pbs.twimg.com/profile_images/711520911082569728/CZvvAEVD.jpg', link:'#link'}
  ]


  let aux = []
  let novaLista = []

  for(let k = 0; k < noticias.length; k++){
    aux.push(noticias[k])
    if(aux.length == 4){
      novaLista.push(aux)
      aux = []
    } else if (k == noticias.length-1) {
      novaLista.push(aux)
    }
  }

  render(){

    return (
    )
  }
}

export default ListaCartao;
