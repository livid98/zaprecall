import Pergunta from "./Pergunta";
import Deck from "./Deck";
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
            </>
        )
    } else if (props.status === 'QuaseNlembrei') {

        return (
            <>
                <CartasFechadas status={props.status} icon="help-circle"  num={props.num} />
            </>
        )
    } else {
            
        return (
            <>
                <CartasFechadas status={props.status} icon="checkmark-circle" num={props.num} />
            </>
        )
    }
}