import  { useEffect, useState } from 'react';
import './card.css'

const Card = (props: any) => {
        
    const [card , setCard] = useState('');
    const [calculoTempo , setCalculoTempo] = useState('');
    
    useEffect(()=>{

        if(props.complexidade == "ocioso" ) setCalculoTempo("ocioso") ;

        if(props.complexidade == "baixa" && [0].indexOf(props.tempo) > -1) setCalculoTempo("normal") ;
        if(props.complexidade == "baixa" && [1].indexOf(props.tempo) > -1) setCalculoTempo("medio") ;
        if(props.complexidade == "baixa" && [2].indexOf(props.tempo) > -1) setCalculoTempo("alto") ;
        if(props.complexidade == "baixa" && props.tempo > 2) setCalculoTempo("muito-alto") ;

        if(props.complexidade == "media" && [0].indexOf(props.tempo) > -1) setCalculoTempo("normal") ;
        if(props.complexidade == "media" && [1].indexOf(props.tempo) > -1) setCalculoTempo("medio") ;
        if(props.complexidade == "media" && [2].indexOf(props.tempo) > -1) setCalculoTempo("alto") ;
        if(props.complexidade == "media" && props.tempo > 2) setCalculoTempo("muito-alto") ;

        if(props.complexidade == "alta" && [0,1,2].indexOf(props.tempo) > -1) setCalculoTempo("normal") ;
        if(props.complexidade == "alta" && [3,4].indexOf(props.tempo) > -1) setCalculoTempo("medio") ;
        if(props.complexidade == "alta" && [5].indexOf(props.tempo) > -1) setCalculoTempo("alto") ;
        if(props.complexidade == "alta" && props.tempo > 5) setCalculoTempo("muito-alto") ;
            
        
            

        setCard(`card complexidade-${props.complexidade} tempo-${calculoTempo}`)
    });

    return (
        <>
        <div className={card}>
            <p>Colaborador: {props.nome}</p>
            <p>Projeto: {props.projeto}</p>
            <p>Complexidade: {props.complexidade}</p>
            <p>{(props.complexidade == 'ocioso' ? 'Aguardando: ': 'Execução: ')} {props.tempo} dia(s)</p>

        </div>
      
        </>
        
    )
    
    

 
    
}

export default Card;