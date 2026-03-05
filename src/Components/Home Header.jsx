import { useState } from "react";
const headerTabs = [
    {label: 'Browse', id: 'browse'},
    {label: 'New', id: 'new'},
    {label: 'Top Rated', id: 'top'},
    {label: 'Recommended', id: 'rec'},
]

const icons = [
    {label: 'Store', icon: '👜'},
    {label: 'User', icon: '👤'}
]



function eventManager(label){
    if(label === 'Theme'){
        document.body.classList.toggle('dark');
    }
}
export default function HomeHeader({setScreen, setCurrentUser, currentUser}){
   const [menuOpen, setMenuOpen] = useState(false);

   const handleLogout = () => {
  setCurrentUser(null);
  
  setScreen('redirectory');
};

    return(
        <header>
            <h1>ABANTUVERSE</h1>
            <nav className="header-buttons">{headerTabs.map(btn => 
                (<button id={btn.id}>
                    {btn.label}
                </button>))}</nav>
        
                <div className="right">
                    {icons.map(icon => (
    <div 
        className="icon-card"
        key={icon.label}
        onClick={()=>{
            if(icon.label === "User"){
                setMenuOpen(!menuOpen)
            } else {
                eventManager(icon.label)
            }
        }}
    >
        <span className="icon">{icon.icon}</span>

        <span className="icon-name">
            {icon.label === 'User'
                ? currentUser?.name.split(' ')[0]
                : icon.label}
        </span>
    </div>
))}
                </div>
                {menuOpen && (
        <div className="profile-menu">
        <div className="profile-name">
            {currentUser?.name}
        </div>

        <button>Profile</button>
        <button>Account Settings</button>
       <button onClick={()=>{
        handleLogout();
       }}>
Log out
</button>
    </div>
)}</header>
    )
}