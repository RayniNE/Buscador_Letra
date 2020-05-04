import React from 'react';

const Artista = ({informacion}) => {

    if(Object.keys(informacion).length === 0) return null;

    const {strArtistThumb, strArtist, strGenre} = informacion;

    return ( 

        <div className="card border-light">
            <div className="card-header bg-primary text-light font-weight-bold">
                Información del artista
            </div>

            <div className="card-body">
                <img src={strArtistThumb} alt="Logo artista"/>
                <p className="card-text">Artista: {strArtist} </p>
                <p className="card-text">Género: {strGenre} </p>
            </div>
        </div>

     );
}
 
export default Artista;