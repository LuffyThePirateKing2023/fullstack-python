import React from 'react';
import './index.css';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';
import SignIn from './pages/SignIn/SignIn';
import SignUp from './pages/SignUp/SignUp';

const App = () => {
  return (
    <div className="bg-gray-900 h-screen w-full">
        {/* <SignIn/>
        <SignUp/> */}
        <Header/>
        <Main/>
        <Footer/>
    </div>
  )
}

export default App;
