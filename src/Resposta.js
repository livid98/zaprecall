import React from 'react';
import CartaFechada from './CartaFechada';
export default function Resposta(props){
  const [fechada, fechar] = React.useState(false);
    return ( !fechada ?
        <>
        <div className="resposta">
       {props.resposta}
       <div className="ajuste">
       <div className="botaoNlembrei" onClick={() => fechar('Nlembrei')} >Não lembrei</div><div className="botaoQuaseNlembrei" onClick={() => fechar('QuaseNlembrei')}>Quase não lembrei</div><div className="botaoZap" onClick={() => fechar('Zap')} >Zap!</div>
       </div>
     </div>
     </> : <CartaFechada status={fechada} pergunta={props.pergunta} resposta={props.resposta} num={props.num} deck={props.deck}/>
    );
    
    }