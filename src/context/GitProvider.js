import React, { useState } from "react";
import gitContext from "./GitContext";
/* 
Salvar informações no Estado deste Componentes
Compartilhar via Context API
*/

function GitProvider({ children }) {
  const [name, setName] = useState('');
  const [userName, setUserName] = useState('');
  const [bio, setBio] = useState('');
  const [followers, setFollowers] = useState('');
  const [following, setFollowing] = useState('');
  const [repos, setRepos] = useState('');
  const [image, setImage] = useState('');

  const getInfos = async () => {
    await fetch("https://api.github.com/users/antonioarieiro", {
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/vnd.github.v3+json'
       }
    })
    .then((response) => response.json())
    .then((data) => console.log(data));
}

  const setValues = ({name, login,followers, following, public_repos, avatar_url, bio}) => {
    setName(name);
    setUserName(login);
    setFollowers(followers);
    setFollowing(following);
    setRepos(public_repos);
    setImage(avatar_url);
    setBio(bio)
  }

 
  return (
    <gitContext.Provider value={{name, userName, followers, following, bio, image, repos, getInfos}}>
      {children}
    </gitContext.Provider>
  );
}

export default GitProvider;
