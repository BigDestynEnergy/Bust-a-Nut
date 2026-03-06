
export default function Profile({setScreen, currentUser}){

    return(
        <main className="profile">
            <div className="box">
                <div className="close" title="close"
                onClick={()=>{setScreen('home')}}
                >X</div>
                <div className="top">
                    <div className="pfp">
                        👤
                        <div className="title">change profile picture</div>
                    </div>
                </div>
                 <div className="right">
                    <span>Username: </span>
                        
                        <select>
                            <option value="none">none</option>
                            <option value="male">He/Him</option>
                            <option value="female">She/Her</option>
                            <option value="other">They/Them</option>
                        </select>
                    </div>

                <div className="mid">
                    <input type="text" placeholder="Add bio" />
                    
                </div>

                <button>Apply changes</button>

                <hr />

                <div className="note">
                    <span>No posts yet</span>
                    <div className="add">
                        <button className="addbtn">+</button>
                        <span className="txt">Add your first post</span>
                    </div>
                </div>
            </div>
        </main>
    )
}