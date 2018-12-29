
import React from "react";

class Cartao extends React.Component {


  render(){

    return (
      <div className="card sticky-actio">
        <div className="card-image waves-effect waves-block waves-light">
          <img className="activator" src="https://pbs.twimg.com/profile_images/711520911082569728/CZvvAEVD.jpg" / >
        </div>
        <div className="card-content">
          <span className="card-title activator grey-text text-darken-4">Titulo<i className="material-icons right">more_vert</i></span>
          <p>Descrição</p>
        </div>
        <div className="card-action">
          <a href="#">Ver Mais</a>
        </div>
        <div className="card-reveal">
          <span className="card-title grey-text text-darken-4">Titulo<i class="material-icons right">close</i></span>
          <p>Detalhe com texto</p>
        </div>
      </div>
    )
  }
}

export default Cartao;
