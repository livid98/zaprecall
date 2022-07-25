import Mensagem from "./Mensagem"

let score = 0;
let array = [];
let errado = false;

function HtmlIcon(resposta) {
    if(resposta.icon === "1"){
        return (
            <>
                <ion-icon class="Nlembrei" name="close-circle"></ion-icon>
            </>
        )
    }if(resposta.icon === "2"){
        return (
            <>
                <ion-icon class="QuaseNlembrei" name="help-circle"></ion-icon>
            </>
        )
    }
    if(resposta.icon === "3"){
        return (
            <>
                <ion-icon class="Zap" name="checkmark-circle"></ion-icon>
            </>
        )
    }
}

function HtmlFooter(score) {
    array = [...array,score.icon];
    return (
        <div className=".baixo2">

                {array.map(resposta => <HtmlIcon icon={resposta} />)}
        
            <h1>{(score.score)}/{(score.deck)}-CONCLUÍDOS</h1>
        </div>
    )
}

export default function Footer(props) {
    score = score + 1;
    if(props.icon === "1"){
        errado = true;
    }
    if(score <= props.deck){
        return (
            <HtmlFooter score={score} deck={props.deck} icon={props.icon}/>
        )
    }else{
        return (
            <>
                <Mensagem resultado={errado} />
                <HtmlFooter score={score} deck={props.deck} icon={props.icon}/>
            </>
        )
    }
}