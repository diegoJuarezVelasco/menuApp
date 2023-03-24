import { useEffect, useState } from "react";
import { useFetch } from "../useFetch";
import Alimento from "./Alimento";
import Header from "./header";

const Menu = () => {

  let menu = useFetch('https://stratech.digital/API/menu.json', {
    mode: 'cors',
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*"
    }
  }
  );
  let alimentos = [];
  let bebidas = [];

  menu.forEach(alimento => {
    if (alimento.categoria === 'alimento') {
      alimentos.push(alimento);
    } else {
      bebidas.push(alimento);
    }
  })
  return (
    <div className="menu">
      <div className="alimentos-container">
        <div className="menu-title">
          <h1>Alimentos</h1>
        </div>
        <div>

          {alimentos.map((alimento, index) =>
            <Alimento
              key={index}
              alimento={alimento}
            />
          )}
        </div>
      </div>
      <div className="alimentos-container">
        <div className="menu-title">
          <h1>Bebidas</h1>
        </div>
        <div>
          {bebidas.map((bebida, index) =>
            <Alimento
              key={index}
              alimento={bebida}
            />
          )}
        </div>
      </div>
    </div>

  )
}
export default Menu;