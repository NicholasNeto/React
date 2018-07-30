import React from 'react'

class Navbar extends React.Component {
  render(){
    let corNavbar = "nav-wrapper " + this.props.cor

    let menu = [
      {titulo:"Home", link:"#home"},
      {titulo:"Sobre", link:"#sobre"},
      {titulo:"Contato", link:"#contato"}
    ]

    let listaDoMenu = menu.map(function(cadaItemDoMenu){
        return (
          <li key={cadaItemDoMenu.titulo} ><a href={cadaItemDoMenu.link}>{cadaItemDoMenu.titulo}</a></li>
      )
    });

    return (
      <nav>
        <div className={corNavbar}>
          <div className="container">
            <a href="#" className="brand-logo">{this.props.titulo}</a>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
              {listaDoMenu}
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
