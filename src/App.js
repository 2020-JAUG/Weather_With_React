import React, { Fragment, useState, useEffect } from 'react';
import Header from './components/Header';
import Formulary from './components/Formulary';
import Clime from './components/Clime';


function App() {

  const [lookFor, setLookFor] = useState ({
    ciudad: '',
    pais: ''
  });

  const [consult, setConsult] = useState(false);

  const [result, setResult] = useState({});

  const {ciudad, pais} = lookFor;

  useEffect(() => {
    const consultAPI = async () => {

      if(consult) {

        const appId = 'b94a9821f9a4bca6761caadb4902aa09';
        const url = `http://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${appId}`;

        const aswer = await fetch(url);
        const result = await aswer.json();

       setResult(result);
      }

    }
    consultAPI();
  }, [ciudad, consult, pais]);

  return (
    <Fragment>
      <Header
        title='Weather React App'
      />

      <div className="contenedor-form">
        <div className="container">
          <div className="row">
            <div className="col m6 s12">
              <Formulary
                lookFor={lookFor}
                setLookFor={setLookFor}
                setConsult={setConsult}
               />
            </div>
            <div className="col m6 s12">
              <Clime
                result={result}
              />
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
