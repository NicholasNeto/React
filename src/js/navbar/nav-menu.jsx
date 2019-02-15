import React from 'react';


class NavMenu extends React.Component {

  constructor(props){
    super(props)
    this.state = {menuActive: "Home"}
    this.alteraActive = this.alteraActive.bind(this)
  }

  alteraActive(titulo, self){
    self.setState({menuActive: titulo})
  }

  render(){

    let self = this

    let listOfMenu = this.props.menu.map(function(value) {
      return (
        <li key={value.titulo} onClick={self.alteraActive.bind(null,value.titulo,self)} className={self.state.menuActive == value.titulo ? "active": ""} > <a href={value.link} > {value.titulo} </a> </li>
      )
    });

  return (
      <ul id="nav-mobile" className="right">
        {listOfMenu}
      </ul>
    );
  }
}

export default NavMenu;
