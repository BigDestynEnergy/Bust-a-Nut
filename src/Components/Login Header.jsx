
export default function LoginHeader({setScreen}){
    return(
        <header>
            <h1>Bust</h1>

            <div className="auth">
                <button className="sign-in" onClick={()=>setScreen('login')}>sign in</button>
                <button className="create" onClick={()=>setScreen('date')}>create account</button>
            </div>
        </header>
    )
}