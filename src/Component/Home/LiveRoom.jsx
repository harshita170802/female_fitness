import React,{useCallback,useState} from 'react';
import { useNavigate } from 'react-router-dom';

const LiveRoom=()=>{
    const [value,setValue]=useState();
    const navigate = useNavigate();
    const handleJoinRoom=useCallback(()=>{
    navigate(`/room/${value}`)
    },[navigate,value])
    return(
        <div  className='liveroomcontainer'>
        <h2>Enter Code for Meeting</h2>
        <div className='liveroominput'>
            <input 
            value={value} 
            onChange={(e)=> setValue(e.target.value)}
            type='text' 
            placeholder='Enter Room Code'
            ></input>
            <button
            onClick={handleJoinRoom}
             >Join</button>
        </div>
        <h6>***NOTE : Enter Room Code as Female Fitness***</h6>
        </div>
    )
}
export default LiveRoom