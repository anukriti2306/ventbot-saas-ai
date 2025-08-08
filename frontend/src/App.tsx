import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home'
import { Login } from './pages/Login'
import { SignUp } from './pages/SignUp'
import { Chat } from './pages/Chat'
import NotFound from './pages/NotFound'
function App() {

  return <main>
    <Header/>
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/login' element={<Login />}/>
      <Route path='/signup' element={<SignUp />}/>
      <Route path='/chat' element={<Chat />}/>
      <Route path='*' element={<NotFound />}/>

    </Routes>
  </main>;
}

export default App;
