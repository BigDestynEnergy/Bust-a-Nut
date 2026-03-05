import { useState } from 'react'
import './App.css'
import Header from './Components/Header'
import Login from './Components/Login'

export default function App(){
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [hide, setHide] = useState(false)
  const [message, setMessage] = useState('')

  return(
    <main>
      <Header/>
      <Login
      email={email}
      setEmail={setEmail}
      password={password}
      setPassword={setPassword}
      hide={hide}
      setHide={setHide}
      message={message}
      setMessage={setMessage}
      />
    </main>
  )
}
