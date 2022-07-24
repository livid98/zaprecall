
export default function Baixo(props){
    console.log(props.deck)
    return (
     <> 
     <div className="baixo">
       <p> 0/{props.deck} concluídas </p>
     </div>
     </>  
    );
    
    }