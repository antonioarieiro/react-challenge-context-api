import React, { useState } from "react";
import gitContext from "./GitContext";
/* 
Salvar informações no Estado deste Componentes
Compartilhar via Context API
*/

function GitProvider({ children }) {
  const [nameChek, setName] = useState('');
  const [nameSeguidores, setNameSeguidores] = useState([]);
  const [userName, setUser] = useState('');
  const [loadingAPI, setLoadingAPI] = useState(false);
  const [login, setUserName] = useState('');
  const [bio, setBio] = useState('');
  const [followers, setFollowers] = useState('');
  const [following, setFollowing] = useState('');
  const [repos, setRepos] = useState('');
  const [image, setImage] = useState('');
  const [erro, setErro] = useState('');
  const [repoName, setRepoName] = useState([]);
  

  const handleChange = (e) => {
    setName(e.target.value);
  }

  const handleSubmit = async () => {
    setLoadingAPI(true)
    const url = `https://api.github.com/users/${nameChek}`;
    await fetch(url)
    .then((res) => {
      res.json().then((data) => {
        if (data.message) {
          setErro(data.message);
        }else {
          setValues(data)
        }
      })
    })
    setLoadingAPI(false)
  }

  const fetchRepos = async () => {
    const url = `https://api.github.com/users/${nameChek}/repos`;
    await fetch(url)
    .then((res) => {
      res.json().then((data) => {
        setRepoName(data)
      })
    })
  }

  const fetchFollowersName = async () => {
    const url = `https://api.github.com/users/${nameChek}/followers`;
    await fetch(url)
    .then((res) => {
      res.json().then((data) => {
        setNameSeguidores(data);
      })
    })
  }

  const setValues = ({ login, followers, following, public_repos, avatar_url, bio, name}) => {
    setUser(name)
    setUserName(login);
    setFollowers(followers);
    setFollowing(following);
    setRepos(public_repos);
    setImage(avatar_url);
    setBio(bio)
  }

  return (
    <gitContext.Provider value={{ repoName, userName, nameChek, loadingAPI,  login, followers, following, bio, image, repos, erro, nameSeguidores, handleSubmit, handleChange, fetchRepos, fetchFollowersName }}>
      {children}
    </gitContext.Provider>
  );
}

export default GitProvider;
