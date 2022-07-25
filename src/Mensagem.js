export default function Mensagem(resultado) {
    if(resultado.resultado === true){
        return (
            <div className="msg">
                <h2>  <img src="sad 7.png" alt="triste" />  Putz...</h2>
                <p>Ainda faltam alguns...
                Mas não desanime!</p>
            </div>
        )
    }else{
        return (
            <div className="msg">
                <h2> <img src="party 2.png" alt="feliz" /> Parabéns!</h2>
                <p>Você não esqueceu de nenhum flashcard!</p>
            </div>
        )
    }
} 