import React, { useContext, useEffect } from 'react';
import gitContext from '../context/GitContext';
import { BsFillPersonFill, BsFillPeopleFill, BsFillTerminalFill } from "react-icons/bs";
import './index.css'

function PersonInfo () {
    const { name, userName, bio, followers, image, repos, getInfos} = useContext(gitContext);

    useEffect(() => {
        getInfos();
    },[getInfos])
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
                        <input placeholder="Digite o Usuario" type="text" />
                        <button type="submit">Procurar</button>
                    </form>
                </div>
            </section>
            <section>
                <div className="box">
                    <h4><BsFillPersonFill />: {name}</h4>
                    <img src={image} alt="userAvatar" />
                    <p>{bio}</p>
                    <div className="person-info">
                        <p><BsFillPeopleFill />: <b>Seguidores:</b> {followers}</p>
                        <p><BsFillTerminalFill/> <b>Resositories:</b> {repos}</p>
                    </div>
                </div>
            </section>
        </main>
        
    )
}

export default PersonInfo;