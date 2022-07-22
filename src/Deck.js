
import FrenteCarta from './FrenteCarta'

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
    }
    
       
    ]

export default function Deck() {

    let numero = 1;
    let deck = cartas.length;

    return (
        <>
            {cartas.map(props => <FrenteCarta pergunta={props.pergunta} resposta={props.resposta} num={numero++} deck={deck} />)}
           
        </>
    )
    }