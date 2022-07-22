
import React from 'react'

export default function FrenteCarta(props){
const [fechada, fechar] =  React.useState(true);
 
return ( fechada ?
<>
<div className="flashcard" onClick={() => fechar(!fechada)}>
<p>Pergunta {props.num}</p>
<img src="Vector.png" alt="imgfrentecarta"/>
</div>
</> : (<> <h1> oi </h1>
</>)
);

}