  import React from 'react'
  import Recall from './Recall'  
    
    function Telainicio() {
    const [inicio, iniciar] = React.useState(true);
    if (inicio) return (
          <>
          <div className="tela1">
          <div className="imagem">
          <img src="image 1.png" alt="imgtela1"/>
          </div>
          <div className="texto">
           ZapRecall
          </div>
          <div className="button" onClick={() => iniciar(!inicio)}>
            <p>Iniciar Recall!</p>
          </div>
        </div>
        </>);
        else { return ( <> < Recall /> </>); }
    
}


export default function Tela1() {

  return (
    <>
        <Telainicio />
    </>
);


}