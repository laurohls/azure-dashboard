import {useNavigate, useParams} from "react-router-dom";

import '../App.css'
const Cadastro = () => {

    const { id } = useParams();

    const redirect = useNavigate();

    const handleRedirecionar = () =>{
        return redirect("/");
    };

    return (
        <div>
            <h1>Cadastro Id = {id}</h1>
            <button onClick={handleRedirecionar}>Home</button>
        </div> 
    )
}

export default Cadastro;