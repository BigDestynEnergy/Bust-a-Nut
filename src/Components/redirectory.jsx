export default function Redirectory({setScreen}){
    return(
        <div className="redirect-page">
            <h3>You're logged out</h3>
            <button onClick={()=>{setScreen('login')}}>sign in to continue</button>
        </div>
    )
}