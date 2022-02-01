import React, { useEffect, useState } from 'react';
import Logo from './assets/logo.png'
import Filtro from './componenst/Filtro';
import Personaje from './componenst/Personaje';
import Personajes from './componenst/Personajes';





function App() {

  const [loading, setLoading] = useState(true)
  const [personajes, setPersonajes] = useState([])
  const [texto, setTexto] = useState('')

  useEffect(() => {
    const fetchPersonajes = async () => {
      const res = await fetch('https://rickandmortyapi.com/api/character')
      const data = await res.json()
      console.log(data)
      setPersonajes(data.results)
      setLoading(false)
      
    }

    fetchPersonajes()
  }, [])

  const personjesFiltrados = personajes.filter((personaje) =>
  personaje.origin.name.toLocaleLowerCase().includes(texto.toLocaleLowerCase())
)


  return (
    <div className="container">
       <figure className='logo'>
         <img src={Logo} alt='Rick and Morpy'/>
       </figure>


       <Filtro
       texto={texto}
       setTexto={setTexto}
       />

       {
         loading ? <div>cargando...</div> :
         <Personajes
         personajes={personjesFiltrados}
         />
       }


       
      
    </div>
  );
}

export default App;
