import React, { useContext } from 'react';
import gitContext from '../context/GitContext';
import { Link } from 'react-router-dom';
import { BsFillForwardFill } from "react-icons/bs";
import icon from '../github.jpg';
import './login.css';


function Login () {
    const {handleChange, handleSubmit, nameChek } = useContext(gitContext);
    return (
        <div className="box-main">
            <img src={icon} alt="imagem" />
            <input
                onChange={handleChange}
                type="text"
                name="userName"
                placeholder="Digite o Usuario"
                required="required"
            />
            {
                nameChek.length < 1 ?
                <p>Digite o nome Nome para Busca</p>
                :<button type="submit" onClick={handleSubmit}><Link to="/Home">Buscar<BsFillForwardFill/></Link></button>
            }
        </div>
    )
}

export default Login;