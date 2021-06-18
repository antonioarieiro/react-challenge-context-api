import React, { useContext,useEffect } from 'react';
import gitContext from '../context/GitContext';
import './index.css'

function PersonInfo () {
    const { name, userName, followers, following, image, repos, getInfos,setValues} = useContext(gitContext);

    useEffect(() => {
        getInfos();
        console.log(name)
    })
    return(
        <main>
            <nav>
                <div className="nav-main">
                    <h4>Home</h4>
                    <p>Login</p>
                    <p>Sair</p>
                </div>
            </nav>
            <section>
                <div className="get-info">
                    <form>
                        <input placeholder="Digite o Usuario" />
                        <button type="submit">Procurar</button>
                    </form>
                </div>
            </section>
            <section>
                <div className="box">
                    <img src="#" alt="userAvatar" />
                    <h5>Nome{name}</h5>
                </div>
            </section>
        </main>
        
    )
}

export default PersonInfo;