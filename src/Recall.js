import Deck from './Deck';
import Baixo from './Baixo';
export default function Recall(){
    return (
     <div className="tela2">
     <div className="topo">
      <div className="topo imagem">
      <img src="image 2.png" alt="imgtela2"/>
      </div>
      <div className="topo texto">
      ZapRecall
      </div>
     </div>
     <div className='conteudo'>
     <Deck/>
     </div>
     <Baixo/>
     </div>
    );
    
    }