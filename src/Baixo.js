export default function Baixo(props){
    console.log(props.deck)
    return (
     <> 
     <div className="baixo">
       <h1> 0/{props.deck} concluídas </h1>
     </div>
     </>  
    );
    
    }