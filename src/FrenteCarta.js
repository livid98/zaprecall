
import React from 'react'
import Pergunta from './Pergunta';

export default function FrenteCarta(props){
const [fechada, fechar] =  React.useState(true);
 
return ( fechada ?
<>
<div className="flashcard" onClick={() => fechar(!fechada)}>
<p>Pergunta {props.num}</p>
<img src="Vector.png" alt="imgfrentecarta"/>
</div>
</> : <Pergunta pergunta={props.pergunta}  resposta={props.resposta} />
);

}