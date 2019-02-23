import React from 'react'


class Busca extends React.Component {

  constructor(props){
    super(props)

    this.atualizaBusca = this.atualizaBusca.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }

  atualizaBusca(evento){
    this.props.atualizaBusca(evento)
  }

  render(){

    return(
      <form >
        <div className="input-field col s6">
          <input placeholder="Digite sua busca" onChange={this.atualizaBusca} type="text" value={this.props.busca} />
          <label>Busca</label>
        </div>
        <p>{this.props.busca}</p>
      </form>
    )
  }
}

export default Busca
