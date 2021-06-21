import React, { useContext } from 'react';
import { Link } from 'react-router-dom'
import gitContext from '../context/GitContext';
import { GrLogin } from "react-icons/gr";
import './index.css';

function Followers () {
    const { nameSeguidores, login } = useContext(gitContext);
    return (
        <main>
            <nav>
                <div className="nav-main">
                  <h4>#{login}</h4>
                      <div className="nav-main">
                        <p> <Link to="/Home" className="nav-main">Perfil</Link></p>
                      </div>
                  
                  <p><Link to="/" className="nav-main">Sair<GrLogin/></Link></p>
                </div>
            </nav>
            <div className="follows">
                <h1> Seguidores:</h1>
                    <div className="follow-box">
                        {
                            nameSeguidores.length >= 1 ?
                            nameSeguidores.map((value) => <p key={value.login}><img src={value.avatar_url}  alt=""/> </p>)
                            : ' Não há seguidores'
                        }
                    </div>
            </div>
        </main>
    )
}

export default Followers;
