import axios from 'axios';
import { useState } from 'react';

const baseUrl = 'https://api.github.com/users/';
const repos = '/repos';
const type = 'all';
const sort = 'updated';
// eslint-disable-next-line camelcase
const per_page = 100;

const UseDataGit = () => {
  const [data, setData] = useState(null);
  const [dataRepos, setDataRepos] = useState([]);
  const [errorUser, setErrorUser] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const getInfoRepos = (name) => {
    axios
      // eslint-disable-next-line camelcase
      .get(`${baseUrl}${name}${repos}`, { params: { type, sort, per_page } })
      .then((response) => {
        const allDataRepos = response.data;
        setDataRepos(allDataRepos);
      });
  };

  const getInfoUser = (name) => {
    axios
      .get(`${baseUrl}${name}`)
      .then((response) => {
        const allData = response.data;
        setIsLoading(true);
        setData(allData);
        setErrorUser(false);
        getInfoRepos(name);
      })
      .catch(() => {
        setIsLoading(true);
        setErrorUser(true);
      });
  };

  return {
    isLoading,
    setIsLoading,
    data,
    dataRepos,
    errorUser,
    getInfoUser,
  };
};

export default UseDataGit;
