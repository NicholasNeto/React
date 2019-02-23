
import ReactDOM from 'react-dom';
import React from 'react';

import Titulo from "./titulo/titulo";
import Navbar from "./navbar/navbar";
import Footer from "./footer/footer";
import ListaCartao from "./cartao/lista-cartao";



let App = (
  <div>
    <Navbar titulo="Trust 29" cor="red"/>
    <div className="container">
      <Titulo />
      <ListaCartao quantidaLinha="4" />
    </div>
    <Footer />
  </div>
);

ReactDOM.render(App, document.getElementById('app'))
