import React, { Fragment } from 'react';
import Header from './components/Header';
import Formulary from './components/Formulary';


function App() {
  return (
    <Fragment>
      <Header 
        title='Weather React App'
      />

      <div className="contenedor-form">
        <div className="container">
          <div className="row">
            <div className="col m6 s12">
              <Formulary />
            </div>
            <div className="col m6 s12">
              2
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
