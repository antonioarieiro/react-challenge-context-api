import React, { useEffect, useState } from "react";
import gitContext from "./GitContext";
import { url } from '../__helpers__/index';
/* 
Salvar informações no Estado deste Componentes
Compartilhar via Context API
*/

function GitProvider({ children }) {
  const [name, setName] = useState('');
  const [userName, setUserName] = useState('');
  const [followers, setFollowers] = useState('');
  const [following, setFollowing] = useState('');
  const [repos, setRepos] = useState('');
  const [image, setImage] = useState('');

  const getInfos = async () => {
    await fetch(url)
    .then(response => response.json())
    .then(data => {
      console.log(data)
    });
  }

  const setValues = ({name, login,followers, following, public_repos, avatar_url}) => {
    setName(name);
    setUserName(login);
    setFollowers(followers);
    setFollowing(following);
    setRepos(public_repos);
    setImage(avatar_url);
  }


  return (
    <gitContext.Provider value={{name, userName, followers, following, image, repos, getInfos, setValues}}>
      {children}
    </gitContext.Provider>
  );
}

export default GitProvider;
