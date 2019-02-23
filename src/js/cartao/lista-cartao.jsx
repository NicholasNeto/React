import React from "react";

import Cartao from "./cartao";
import CriaListaDeCartoes from "./gerador-lista-cartao";

class ListaCartao extends React.Component {

  render(){

    let noticias = [
      {titulo:'Titulo 1', descricao:'descrição 1', detalhe:'detalhe 1', imagem:'https://imgcentauro-a.akamaihd.net/900x900/M007TE01/mountain-bike-track-bikes-tks-aro-29-freio-a-disco-cambio-shimano-21-marchas-img.jpg', link:'#link'},
      {titulo:'Titulo 2', descricao:'descrição 2', detalhe:'detalhe 2', imagem:'https://www.bigw.com.au/medias/sys_master/images/images/h1e/h98/12009921773598.jpg', link:'#link'},
      {titulo:'Titulo 3', descricao:'descrição 3', detalhe:'detalhe 3', imagem:'https://www.target.com.au/medias/static_content/product/images/full/00/68/A1240068.jpg?impolicy=mobile_hero', link:'#link'},
      {titulo:'Titulo 4', descricao:'descrição 4', detalhe:'detalhe 4', imagem:'https://images-americanas.b2w.io/produtos/01/00/item/125770/4/125770404SZ.jpg', link:'#link'},
      {titulo:'Titulo 5', descricao:'descrição 5', detalhe:'detalhe 5', imagem:'https://imgcentauro-a.akamaihd.net/900x900/M007TE01/mountain-bike-track-bikes-tks-aro-29-freio-a-disco-cambio-shimano-21-marchas-img.jpg', link:'#link'},
      {titulo:'Titulo 6', descricao:'descrição 6', detalhe:'detalhe 6', imagem:'https://www.ourobikes.com.br/7587-large_default/kit-grupo-shimano-altus-24v-freios-a-disco-shimano.jpg', link:'#link'},
      {titulo:'Titulo 7', descricao:'descrição 7', detalhe:'detalhe 7', imagem:'https://www.bigw.com.au/medias/sys_master/images/images/h1e/h98/12009921773598.jpg', link:'#link'},
      {titulo:'Titulo 8', descricao:'descrição 8', detalhe:'detalhe 8', imagem:'https://images-americanas.b2w.io/produtos/01/00/item/125770/4/125770404SZ.jpg', link:'#link'},
      {titulo:'Titulo 9', descricao:'descrição 9', detalhe:'detalhe 9', imagem:'https://http2.mlstatic.com/quadro-bicicleta-alfameq-stroll-aro-29-aluminio-D_NQ_NP_163811-MLB20632020635_032016-F.jpg', link:'#link'},
      {titulo:'Titulo 10', descricao:'descrição 10', detalhe:'detalhe 10', imagem:'https://http2.mlstatic.com/quadro-bicicleta-alfameq-stroll-aro-29-aluminio-D_NQ_NP_163811-MLB20632020635_032016-F.jpg', link:'#link'},
      {titulo:'Titulo 11', descricao:'descrição 11', detalhe:'detalhe 11', imagem:'http://www.sundaybikes.com/wp-content/uploads/2018/07/Soundwave-Web-2018-1000x667.jpg', link:'#link'},
      {titulo:'Titulo 12', descricao:'descrição 12', detalhe:'detalhe 12', imagem:'http://www.sundaybikes.com/wp-content/uploads/2018/07/Soundwave-Web-2018-1000x667.jpg', link:'#link'}
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
          <CriaListaDeCartoes passandoProps={grupo} tamanhoColuna="3" />
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
