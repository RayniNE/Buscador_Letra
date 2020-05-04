import React, { Fragment, useState, useEffect } from 'react';
import Formulario from './components/Formulario';
import Cancion from './components/Cancion';
import Artista from './components/Artista';

import axios from 'axios';

function App() {

  const [busquedaletra, setBusquedaLetra] = useState({});
  const [letra, setLetra] = useState('');
  const [informacion, setInformacion] = useState({});

  const { artista, cancion } = busquedaletra;


  useEffect(() => {

    if(Object.keys(busquedaletra).length === 0) return;


    const callAPI = async() => {
      const urlLetra = `https://api.lyrics.ovh/v1/${artista}/${cancion}`;
      const urlArtista = `https://www.theaudiodb.com/api/v1/json/1/search.php?s=${artista}`;

      const [letra, informacion] = await Promise.all([

        axios.get(urlLetra),
        axios.get(urlArtista)

      ]);

      setLetra(letra.data.lyrics);
      setInformacion(informacion.data.artists[0]);
    }
    callAPI();

  }, [busquedaletra])

  return (
    <Fragment>

      <Formulario
        setBusquedaLetra={setBusquedaLetra}
      />

      <div className="container mt-5">

        <div className="row">

          <div className="col-md-6">

            <Artista
              informacion={informacion}
            />
          </div>

          <div className="col-md-6">

            <Cancion
              letra={letra}
            />

          </div>


        </div>

      </div>

    </Fragment>
  );
}

export default App;
