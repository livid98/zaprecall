import Baixo from './Baixo';
import FrenteCarta from './FrenteCarta';
const cartas = [
    {
        pergunta: "O que é JSX?",
        resposta: "Uma extensão de linguagem do JavaScript"
    },
    {
        pergunta: "O React é __ ",
        resposta: "Uma biblioteca JavaScript para construção de interfaces"
    },
    {
        pergunta: "Componentes devem iniciar com __ ",
        resposta: "Letra maiúscula"
    },
    {
        pergunta: "Podemos colocar __ dentro do JSX",
        resposta: "Expressões"
    },
    {
        pergunta: "O ReactDOM nos ajuda __ ",
        resposta: "interagindo com a DOM para colocar componentes React na mesma"
    },
    {
        pergunta: " Usamos o npm para __  ",
        resposta: "gerenciar os pacotes necessários e suas dependências"
    },
    {
        pergunta: "Usamos props para __ ",
        resposta: "passar diferentes informações para componentes"
    },
    {
        pergunta: "Usamos estado (state) para __ ",
        resposta: "dizer para o React quais informações quando atualizadas devem renderizar a tela novamente"
    }
       
    ]

export default function Deck() {
    let numero = 1;
    let sortearCartas = cartas.sort(()=>Math.random()-0.5);
    let sortidas = sortearCartas.slice(4);
    let deck = sortidas.length;
    return (
        <>
            {sortidas.map(props => <FrenteCarta  pergunta={props.pergunta} resposta={props.resposta} num={numero++} deck={deck} />)}
            <Baixo deck={deck}/>
        </>
    )
    }