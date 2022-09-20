import '../css/TemperatureController.css'
import {useState} from "react";

const TemperatureController=()=>{
    const [tem,setTem]=useState(10);
    const [tem_state,set_tem_state]=useState('hot');
    const increaseTem=()=>{
        const new_tem=tem+1
        setTem(new_tem)
        if (new_tem>=20){
            set_tem_state('hot')
        }
    }
    const decreaseTem=()=>{
        setTem((tem-1))
    }
    return (
        <div className='app-container'>
            <div className='temperature-display-container '>
                <div className={`temperature-display ${tem_state}`}>{tem}°C</div>
            </div>
            <div className='button-container'>
                {/*<button onClick={()=>setTem(tem+1)}>+</button>*/}
                {/*<button onClick={()=>setTem(tem-1)}>-</button>*/}
                <button onClick={increaseTem}>+</button>
                <button onClick={decreaseTem}>-</button>
            </div>
        </div>
    );
}

export default TemperatureController;