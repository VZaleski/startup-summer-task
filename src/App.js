import { useEffect } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Initial from './components/Initial/Initial';
import UserNotFound from './components/UserNotFound/UserNotFound';
import Main from './components/Main/Main';
import useDataGit from './hooks/useDataGit';
import Loading from './components/Loading/Loading';

function App() {
  const { isLoading, setIsLoading, data, dataRepos, errorUser, getInfoUser } = useDataGit();
  const sendInfoUser = (name) => {
    getInfoUser(name);
  };

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 200);
  });

  return (
    <div className="App">
      {isLoading ? (
        <Loading />
      ) : (
        <div>
          <Header sendInfoUser={sendInfoUser} />
          {!data && !errorUser && <Initial />}
          {data && !errorUser && <Main data={data} dataRepos={dataRepos} />}
          {errorUser && <UserNotFound />}
        </div>
      )}
    </div>
  );
}

export default App;
