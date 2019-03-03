import React from "react";
import axios from 'axios';

import Cartao from "./cartao";
import Busca from "../busca/busca";
import CriaListaDeCartoes from "./gerador-lista-cartao";

class ListaCartao extends React.Component {

  constructor(props){
    super(props)

    this.atualizaBusca = this.atualizaBusca.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
    this.state = {busca: '', dados: [], servidor:[]}
  }

  atualizaBusca(evento){
    this.setState({busca: evento.target.value})
    if(evento.target.value == ""){
      this.setState({dados: this.state.servidor})
    }
  }

  onSubmit(evento){
    console.log(this.state.busca)
    let busca = this.state.busca
    let dados = this.state.servidor

    let novaLista = dados.filter (function(item) {
      if(item.titulo.toUpperCase().indexOf(busca.toUpperCase()) > -1
      || item.descricao.toUpperCase().indexOf(busca.toUpperCase()) > -1
      || item.detalhe.toUpperCase().indexOf(busca.toUpperCase()) > -1) {
        return item;
      }
    })

    this.setState({dados: novaLista})
    evento.preventDefault();
  }

  componentDidMount(){
    let self = this;
    axios.get('http://localhost:8000/servidor.php?dados=1').then(function(response){
      self.setState({
        dados: response.data,
        servidor: response.data
      });
    });

  }

  render(){

    let noticias = this.state.dados

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

        <div  className="row">
          <Busca atualizaBusca={this.atualizaBusca} onSubmit={this.onSubmit} busca={this.state.busca}/>
        </div>
        {linha}

      </div>
    )
  }
}

export default ListaCartao;
