import React from "react";

import Cartao from "./cartao";

class CriaListaDeCartoes extends React.Component {

  render(){

    let tamanhoColuna = "col m" + this.props.tamanhoColuna

    let criaListaCartao = this.props.passandoProps.map(function(item) {
      return (
        <div key={item.titulo} className={tamanhoColuna}>
          <Cartao dados={item}/>
        </div>
      )
    });

    return(
      <div>
        {criaListaCartao}
      </div>
    )
  }
}

export default CriaListaDeCartoes;
