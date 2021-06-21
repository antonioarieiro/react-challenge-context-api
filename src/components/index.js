import React, { useContext } from 'react';
import gitContext from '../context/GitContext';
import { Link } from 'react-router-dom'
import { BsFillPersonFill } from "react-icons/bs";
import { GrLogin } from "react-icons/gr";
import './index.css';

function PersonInfo () {
    const {userName, login, bio, followers, image, following, erro, repos, loadingAPI, fetchRepos, fetchFollowersName } = useContext(gitContext);
    return(
        <main>
            {
                loadingAPI ? <h1 style={{color: "white"}} className="person-info"> Carregando ...</h1>
                : ''
            }
            <nav>
                <div className="nav-main">
                  <h4>#{login}</h4>
                  <div className="nav-main">
                      {
                          repos >= 1 ? 
                          <p onClick={fetchRepos}> <Link to="/Repositories" className="nav-main">Repositories</Link></p>
                          : ''
                      }

                      {
                          followers >=1 ?
                          <p onClick={fetchFollowersName}><Link to="/Followers" className="nav-main">Seguidores</Link></p>
                          : ''
                      }              
                   </div>
                  <p><Link to="/" className="nav-main">Sair<GrLogin/></Link></p>
                </div>
            </nav>
            <section>
                {
                    erro ?(<h4 className="box">{erro}</h4>)
                    :
                    <div className="box">
                        <img src={image} alt="userAvatar" />
                        <h1><BsFillPersonFill />: {userName}</h1>
                        <p>{bio}</p>
                        <div className="person-info">
                            <h3>{followers}<p>Seguidores</p></h3>
                            <h3>{following}<p>Seguindo</p></h3>
                            <h3>{repos}<p>Repositories</p></h3>
                        </div>
                    </div>
                }
            </section>
        </main>
        
    )
}

export default PersonInfo;
