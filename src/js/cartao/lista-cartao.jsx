import React from "react";

import Cartao from "./cartao";
import CriaListaDeCartoes from "./gerador-lista-cartao";

class ListaCartao extends React.Component {

  render(){

    let noticias = [
      {titulo:'Titulo 1', descricao:'descrição 1', detalhe:'detalhe 1', imagem:'https://pbs.twimg.com/profile_images/711520911082569728/CZvvAEVD.jpg', link:'#link'},
      {titulo:'Titulo 2', descricao:'descrição 2', detalhe:'detalhe 2', imagem:'https://pbs.twimg.com/profile_images/711520911082569728/CZvvAEVD.jpg', link:'#link'},
      {titulo:'Titulo 3', descricao:'descrição 3', detalhe:'detalhe 3', imagem:'https://pbs.twimg.com/profile_images/711520911082569728/CZvvAEVD.jpg', link:'#link'},
      {titulo:'Titulo 4', descricao:'descrição 4', detalhe:'detalhe 4', imagem:'https://pbs.twimg.com/profile_images/711520911082569728/CZvvAEVD.jpg', link:'#link'},
      {titulo:'Titulo 5', descricao:'descrição 5', detalhe:'detalhe 5', imagem:'https://pbs.twimg.com/profile_images/711520911082569728/CZvvAEVD.jpg', link:'#link'},
      {titulo:'Titulo 6', descricao:'descrição 6', detalhe:'detalhe 6', imagem:'https://pbs.twimg.com/profile_images/711520911082569728/CZvvAEVD.jpg', link:'#link'}
    ];

    let gruposTemporarios = [];
    let grupos = [];

    for(let interadorCadaNoticia = 0; interadorCadaNoticia<noticias.length; interadorCadaNoticia++){
      gruposTemporarios.push(noticias[interadorCadaNoticia])
      if(gruposTemporarios.length == this.props.quantidaLinha){
        grupos.push(gruposTemporarios)
        gruposTemporarios = []
      } else if (interadorCadaNoticia == noticias.length - 1) {
        grupos.push(gruposTemporarios)
      }
    }

    let linha = grupos.map(function(grupo, index){
      return(
        <div key={index} className="row">
          <CriaListaDeCartoes passandoProps={grupo} tamanhoColuna="4" />
        </div>
      );
    })


    return (
      <div>
        {linha}
      </div>
    )
  }
}

export default ListaCartao;
