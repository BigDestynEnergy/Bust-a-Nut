import './App.css'
import { useState } from 'react';
import LoginForm from './Components/Login';
import LoginHeader from './Components/Login Header';
import Date from './Components/Date';
import CreateForm from './Components/create';
import './styles.css'
import Home from './Components/Home Page';
import HomeHeader from './Components/Home Header';
import Redirectory from './Components/redirectory';
import './Styles/Responsiveness.css'

export default function App(){

 const [screen, setScreen] = useState('redirectory');
 const [email, setEmail] = useState('')
 const [password, setPassword] = useState('')
 const [hide, setHide] = useState(false)
 const [note, setNote] = useState('')
 const [isNoteActive, setIsNoteActive] = useState(false)
 const [day, setDay] = useState('')
 const [month, setMonth] = useState('')
 const [year, setYear] = useState('')
 const [message, setMessage]=useState('')
 const [emailC, setEmailC] = useState('')
 const [passwordC, setPasswordC] = useState('')
 const [user, setUser] = useState('')
 const [currentUser, setCurrentUser] = useState(null)
  return(
    <main>
      {screen === 'date' && (
        <div className='Login-Page'>
          <LoginHeader setScreen={setScreen}/>
        <Date 
        setScreen={setScreen}
        day={day}
        year={year}
        month={month}
        message={message}
        setMessage={setMessage}
        setDay={setDay}
        setMonth={setMonth}
        setYear={setYear}
        />
        </div>
      )}

            {screen === 'login' && (
        <div className='Login-Page'>
        <LoginHeader setScreen={setScreen}/>
        <LoginForm 
        screen={screen}
        email={email}
        message={message}
        setMessage={setMessage}
        password={password}
        hide={hide}
        setHide={setHide}
        setCuurentUser={setCurrentUser}
        setPassword={setPassword}
        setScreen={setScreen}
        note={note}
        setNote={setNote}
        isNoteActive={isNoteActive}
        setIsNoteActive={setIsNoteActive}
        setEmail={setEmail}
        />
        </div>

      )}

      {screen === 'create' && (
        <main className='create-page'>
          <LoginHeader setScreen={setScreen}/>
          <CreateForm 
            emailC={emailC}
            passwordC={passwordC}
            setEmailC={setEmailC}
            user={user}
            setUser={setUser}
            setPasswordC={setPasswordC}
            hide={hide}
            setHide={setHide}
            setScreen={setScreen}
            message={message}
            setMessage={setMessage}
            setCurrentUser={setCurrentUser}
          />
        </main>
      )}

      {screen === 'home' && (
        <section className='home'>
        <Home setCurrentUser={setCurrentUser}/>
        <HomeHeader currentUser={currentUser}
        
        setCurrentUser={setCurrentUser}
        setScreen={setScreen}/>
        </section>
      )}

      {screen === 'redirectory' && (
        <div className="loading-page">
          <Redirectory setScreen={setScreen}/>
        </div>
      )}

    </main>
  )
}