import React from 'react';
import '../styles/Perfil.css';

function Perfil() {
    // Función de ejemplo para simular la descarga del CV
const DownloandCV = () => {
    console.log("Descargando CV...");
    // Agrega la lógica real para la descarga del CV
  };
  
  // Función de ejemplo para simular el contacto
  const contacme = () => {
    console.log("Contactándome...");
    // Agrega la lógica real para el contacto
  };
  
  return (
    <div className="perfil">
      <img className="foto" src="" alt="Profile" />
      <div>
        <h1 className="title">vRodrigo Zanca</h1>
        <p className="sub-title">junior developerr</p>

        <div className="redes">
          {/* Reemplaza con tu código SVG real */}
          {/* ... tu código SVG aquí */}
          {/* Repite para otros iconos SVG */}
        </div>

        <div className="conteiner">
          <div>
            <p className="a">7</p>
          </div>
          <div>
            <p className="b">years of work experience</p>

            <p className="a">50+</p>
            <p className="b">completed projects</p>

            <p className="a">20+</p>
            <p className="b">satisfied customers</p>
          </div>
        </div>

        <div>
          <button onClick={DownloandCV} className="enviar">
            DownloandCV
          </button>
          <button onClick={contacme} className="enviar">
            contacme
          </button>
        </div>
      </div>
    </div>
  );
}

export default Perfil;
