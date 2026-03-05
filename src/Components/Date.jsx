const styles = {
background: '#111',
padding:'8px',
borderRadius: '8px',
width: '310px',
color: '#1db954'
}
export default function Date({message,setMessage, day, year, month, setDay, setMonth, setYear, setScreen}){

    function showMsg(text){
        setMessage(text);
        setTimeout(()=>{
            setMessage('')
        }, 2000)
    }

    function handleDateInfo(){
        if(day === '')showMsg('Add your date of birth');
        else if(day.length > 2)showMsg('Add a valid day');
        else if(month === '')showMsg('Add birth month');
        else if(month.length > 2)showMsg('Enter valid month');
        else if(year === '')showMsg('Add birth year');
        else if(year.length < 4)showMsg('Enter valid year')
        else if(year.length > 4)showMsg('Enter valid year');
        else(
            setDay(''),
            setMonth(''),
            setYear(''),
            setScreen('create')
        )
    }
    return(
        <form className="date" onSubmit={(e)=>{
            e.preventDefault();
            handleDateInfo();
            }}>
            <h3>Let's get you started</h3>
            <span>When were you born?</span>
            <span 
            
            style={message ? styles : {}}>{message}</span>
            <div className="boxes">
                <input type="text" 
                value={day}
                onChange={(e)=>{setDay(e.target.value)}}
                placeholder="day"/>
                <input type="text" 
                value={month}
                onChange={(e)=>{setMonth(e.target.value)}}
                placeholder="Month" />
                <input type="text" 
                value={year}
                onChange={(e)=>{setYear(e.target.value)}}
                placeholder="Year"/>
            </div>
            <button>continue</button>
        </form>
    )
}