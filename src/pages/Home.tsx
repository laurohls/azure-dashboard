import React, { useEffect, useState } from 'react';
import '../App.css'
import Card from '../components/cards/card';
const Home = () => {

  
    const [pessoas, setPessoas] = useState(
        [
            {"id":1, "nome": "Lauro Henrique"},
            {"id":2, "nome": "Pedro Silva"},
            {"id":3, "nome": "Lucas Leite"},
            {"id":4, "nome": "Lucia Lemes"},
            {"id":5, "nome": "Jean Carlos"},
            {"id":5, "nome": "Jean Carlos"}
        ]
    );

     const complexidade = ["ocioso","baixa", "media", "alta", "muito-alta"];   
     const projeto = ["SGF","SGPM", "FVM", "DFE", "SGDA", "AGENCIA", "SIPLAFEM", "HOLERITE"];  
    
     const atualizar = () => {
        var dados = pessoas.map((x:any)=>{
            x.tempo = Math.floor(Math.random() * 6) ;
            var complx = complexidade[Math.floor(Math.random() * 4)];
            x.complexidade = complx ;
            x.projeto = (complx == 'ocioso' ?  '--' : projeto[Math.floor(Math.random() * 7)]);
            return x;
            
           });

           setPessoas(dados);
     }   
   
   

   

    useEffect(() => {

        
    }, []);

    return (
        <>
            <button onClick={atualizar}>Atualizar</button> <hr></hr>
            {pessoas.sort((a,b)=> a.tempo - b.tempo).map((pessoa, index) =>
                <Card key={index} nome={pessoa.nome} projeto={pessoa.projeto} complexidade={pessoa.complexidade} tempo={pessoa.tempo} />
            )
            };
            

        </>

    )




}

export default Home;