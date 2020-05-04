import React, { Fragment, useState, useEffect } from 'react';
import Formulario from './components/Formulario';

function App() {

  const [busquedaletra, setBusquedaLetra] = useState({});
  const [letra, setLetra] = useState('');

  const { artista, cancion } = busquedaletra;

  useEffect(() => {

    if(Object.keys(busquedaletra).length === 0) return;

    const callAPI = async() => {
      const url = `https://api.lyrics.ovh/v1/${artista}/${cancion}`;
      const api = await fetch(url);
      const respuesta = await api.json();
      console.log(respuesta.lyrics);
    }
    callAPI();

  }, [busquedaletra])

  return (
    <Fragment>

      <Formulario
        setBusquedaLetra={setBusquedaLetra}
      />

    </Fragment>
  );
}

export default App;
