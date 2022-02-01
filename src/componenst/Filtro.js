import React, { useState } from 'react';


const Filtro = ({texto, setTexto}) => {

    

    const handleInputChange = ({target}) => {
      setTexto(target.value)
     
    }

    const handleSubmit = e => {
        e.preventDefault()
        console.log(texto)
    }
  
 
    return ( 
        <section className='filtrar'>
          <form onSubmit={handleSubmit}>
              <input 
              type="text" 
              name="buscar" 
              placeholder='Nombre del Personaje'
              value={texto} onChange={handleInputChange}

              />
              <button type='submit'>Buscar</button>
          </form>
        </section>
     );
}
 
export default Filtro;