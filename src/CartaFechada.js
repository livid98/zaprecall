import Pergunta from "./Pergunta";
import Deck from "./Deck";
import Footer from "./Baixo2";
function CartasFechadas(props) {
    return (
        
            <div className='flashcard'>
                <p className={props.status}>Pergunta {props.num}</p>
                <ion-icon name={props.icon}></ion-icon>
        </div>
    )
}



export default function CartaFechada(props) {
    console.log(props)
    if (props.status === 'Nlembrei') {

        return (
            <>
                <CartasFechadas status={props.status} icon="close-circle" num={props.num} />
                <Footer deck={props.deck} icon="1" status="Nlembrei"/>
            </>
        )
    } else if (props.status === 'QuaseNlembrei') {

        return (
            <>
                <CartasFechadas status={props.status} icon="help-circle"  num={props.num} />
                <Footer deck={props.deck} icon="2" status="QuaseNlembrei"/>
            </>
        )
    } else {
            
        return (
            <>
                <CartasFechadas status={props.status} icon="checkmark-circle" num={props.num} />
                <Footer deck={props.deck} icon="3" status="Zap"/>
            </>
        )
    }
}