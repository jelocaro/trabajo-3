

const Personaje = ({personaje}) => {

    console.log(personaje)
    return ( 
        <article className="personaje">
            <div className="personaje-header">
                <div className="estado">
                    <span className="dead"></span>
                    <h4>{personaje.dimension}</h4>
                </div> 
            </div>
            <div className="personaje-body">
                <figure>
                    <img src={personaje.image} alt=""/>
                </figure>
                <h2>{personaje.name}</h2>
                <p>{personaje.type}<span>-</span>Man</p>
                <p>{personaje.origin.name}<span>-</span>Man</p>
            </div>
        </article>
     );
}
 
export default Personaje;