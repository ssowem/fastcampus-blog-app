
import { useEffect, useState } from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { app } from 'firebaseApp';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Router from './components/Router';
import Loader from 'components/Loader';

function App() {
  const auth = getAuth(app);

  //auth를 체크하기 전에 (initaialize 전)에는 loader를 띄워주는 용도
  const [init, setInit] = useState<boolean>(false);

  // auth 에서 currentUser값이 있으면 true로,
  // 값이 없으면 false상태로 라우터를 렌더링함 (auth의 currentUser가 있으면 setIsAuthenticated로 변경)
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(
    !!auth.currentUser
  );

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsAuthenticated(true);
      } else {
        setIsAuthenticated(false);
      }
      setInit(true);
    });
  }, [auth]);
  return (
    <>
      <ToastContainer />
       {init ? <Router isAuthenticated={isAuthenticated} /> : <Loader /> }
    </>
  );

}

export default App;
