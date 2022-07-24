import React from 'react';
export default function Resposta(props){
  const [fechada, fechar] = React.useState(false);
    return ( !fechada ?
        <>
        <div className="resposta">
       {props.resposta}
       <div className="ajuste">
       <div className="botaoNlembrei" onClick={() => fechar('botaoNlembrei')} >Não lembrei</div><div className="botaoQuaseNlembrei" onClick={() => fechar('botaoQuaseNlembrei')}>Quase não lembrei</div><div className="botaoZap" onClick={() => fechar('botaoZap')} >Zap!</div>
       </div>
     </div>
     </> : (<><h1>OI</h1></>)
    );
    
    }