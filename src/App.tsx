
import { useState } from 'react';
import { getAuth } from 'firebase/auth';
import { app } from 'firebaseApp';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Router from './components/Router';

function App() {
  const auth = getAuth(app);
  console.log(auth);
  // auth 에서 currentUser값이 있으면 true로,
  // 값이 없으면 false상태로 라우터를 렌더링함
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(
    !!auth.currentUser
  );
  return (
    <>
      <ToastContainer />
      <Router isAuthenticated={isAuthenticated} />
    </>
  );

}

export default App;
