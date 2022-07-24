
import React from 'react'
import Pergunta from './Pergunta';

export default function FrenteCarta(props){
const [fechada, fechar] =  React.useState(true);
 
return ( fechada ?
<>
<div className="flashcard" onClick={() => fechar(!fechada)}>
<p>Pergunta {props.num}</p>
<ion-icon name="play-outline"></ion-icon>
</div>
</> : <Pergunta pergunta={props.pergunta}  resposta={props.resposta} num={props.num} deck={props.deck}/>
);

}