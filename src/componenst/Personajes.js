
import React from 'react';
import Personaje from './Personaje';




const Personajes = ({personajes}) => {

    console.log(personajes)
    return ( 
        <section className='lista-personajes'>

            {
                personajes.map(personaje =>  <Personaje key={personaje.id} personaje = {personaje}/>)
            }
              

           
         
        </section>

     );
}
 
export default Personajes;