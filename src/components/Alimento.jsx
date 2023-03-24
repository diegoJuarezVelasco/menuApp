const Food = ({alimento}) => {
    
    let {nombre, precio, descripcion } = alimento;
    let pesoMexicano = new Intl.NumberFormat('es-MX', {
        style: 'currency',
        currency: 'MXN',
    });
    let precioEnPesosMexicanos = precio * 18.12;


    return ( 
        <div className="alimento">
            <h3 className="nombre-alimento">{nombre}</h3>
            <p className="descripcion-alimento">{descripcion}</p>
            <p className="precio-alimento">Precio: <span className="precio">{pesoMexicano.format(precioEnPesosMexicanos)}</span></p>
        </div>
     );
}
 
export default Food;