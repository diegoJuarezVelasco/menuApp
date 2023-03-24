import { useState, useEffect } from 'react';

 let alimentos = {
    "items": [
        {
            "nombre": "Hamburguesa con queso",
            "precio": 8.99,
            "categoria": "alimento",
            "descripcion": "Deliciosa hamburguesa con queso cheddar fundido, lechuga, tomate, cebolla y salsa especial"
        },
        {
            "nombre": "Ensalada César",
            "precio": 6.99,
            "categoria": "alimento",
            "descripcion": "Lechuga fresca, croutones, queso parmesano y pollo a la parrilla con aderezo César"
        },
        {
            "nombre": "Pizza Margarita",
            "precio": 10.99,
            "categoria": "alimento",
            "descripcion": "Pizza clásica con salsa de tomate, mozzarella fresca y albahaca"
        },
        {
            "nombre": "Sándwich de pollo",
            "precio": 7.99,
            "categoria": "alimento",
            "descripcion": "Sándwich de pollo a la parrilla con lechuga, tomate y mayonesa"
        },
        {
            "nombre": "Papas fritas",
            "precio": 3.99,
            "categoria": "alimento",
            "descripcion": "Papas fritas crocantes y doradas, perfectas para acompañar tu comida"
        },
        {
            "nombre": "Refresco de cola",
            "precio": 2.99,
            "categoria": "bebida",
            "descripcion": "Refresco de cola en lata de 355ml"
        },
        {
            "nombre": "Cerveza Lager",
            "precio": 4.99,
            "categoria": "bebida",
            "descripcion": "Cerveza Lager de fermentación baja con un aroma y sabor suaves y refrescantes"
        },
        {
            "nombre": "Agua mineral",
            "precio": 1.99,
            "categoria": "bebida",
            "descripcion": "Agua mineral natural embotellada de manantial"
        },
        {
            "nombre": "Café americano",
            "precio": 2.99,
            "categoria": "bebida",
            "descripcion": "Café americano caliente recién hecho"
        },
        {
            "nombre": "Té helado",
            "precio": 2.49,
            "categoria": "bebida",
            "descripcion": "Té helado con limón natural y hierbas frescas"
        }
    ]
}


export function useFetch (url) {
    const [data, setData] = useState([]);
    useEffect(() => {
        // fetch(url)
        // .then((response) => response.json())
        // .then((data) => setData(data.items));
        setData(alimentos.items)
        
    }, [])

    return data;

}