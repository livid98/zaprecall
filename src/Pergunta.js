import React from 'react';
import Resposta from './Resposta';
export default function Pergunta(props){
    const [pergunta, verResposta] =  React.useState(true);
    return ( pergunta ?
      <>
     <div className="pergunta">
       <div>{props.pergunta}</div>
       <img src="Vector2.png" alt="imgtrascarta" onClick={() => verResposta(!pergunta)}  />
     </div>
     </> : <Resposta resposta={props.resposta}/>
    );
    
    }