import React, { useContext } from 'react';
import { Link } from 'react-router-dom'
import gitContext from '../context/GitContext';
import { GrLogin } from "react-icons/gr";
import './index.css';

function Repositories () {
    const { repoName, login, loadingAPI} = useContext(gitContext);
    return (
        <div className="repos">
             {
                loadingAPI ? <h1 style={{color: "white"}} className="person-info"> Carregando ...</h1>
                : ''
            }
             <nav>
                <div className="nav-main">
                  <h4>#{login}</h4>
                      <div className="nav-main">
                        <p> <Link to="/Home" className="nav-main">Perfil</Link></p>
                      </div>
                  <p><Link to="/" className="nav-main">Sair<GrLogin/></Link></p>
                </div>
            </nav>
            <div className="repos-info">
            {
                repoName.length > 1 ?
                repoName.map((value => 
                    <h4 key={value.name}>
                        <p>Nome Do Repositorio: {value.name} </p> 
                        <p>Linguagem: {value.language} <button><a href={value.html_url}>  Link </a></button> </p>
                    </h4>
                ))
                : 'Não Há Repositorios'
            }
            </div>
        </div>
    )
}

export default Repositories;
