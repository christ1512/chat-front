import React, { useState,useEffect,useRef} from 'react';
import Items from './Items';
import socket from'./socketIO' 

const ClienteSocket = ({msgxR,users}) => {

const [nombre,setNombre] = useState("")
const [msg,setMsg] = useState('')
const [msgx,setMsgx] = useState([{user:'',ms:''}])
const scroll = useRef()
const handleInputsNick=(e)=>{
   setNombre(e.target.value)
}

const handleInputsMessage=(e)=>{
  setMsg(e.target.value)
}

const handleMensajesActivos = async() =>{
  console.log('enviando mensajes nombre y mensajes')
  await socket.emit('chat:message-send',{user:nombre,mensajes:msg})
  setMsg('')
}

const handleMensajesActivosKenEnter = async(e) =>{
 
  if(e.key === 'Enter'){
    await socket.emit('chat:message-send',{user:nombre,mensajes:msg})
    setMsg('')
  }
  
}

const anidarListaMs=(msgxR)=>{
  setMsgx([...msgx,{user:msgxR.user,ms:msgxR.ms}])
  scroll.current.scrollTop = scroll.current.scrollHeight
  
}
useEffect(()=>{
anidarListaMs(msgxR)
},[msgxR])

  return (
    <div className="Container p-4">
     <div className="row">
        <div className="col-8">
        <h3>
        Chat...🔊
      </h3>
      
      <label>Mensajes generales</label>
                
      <div className='p-4 mb-4' style={{overflowY:'scroll',height:'350px'}} ref={scroll}>
    
           {msgx.map((m,index)=>{
          return(
                <Items m={m} key={index} i={index}/>
              )
          })}
        
       
       
      </div>

     
      
      <div className="input-group mb-3">
        <div className="input-group-prepend">
          <span className="input-group-text" id="inputGroup-sizing-default">Nombre</span>
        </div>
        
        <input type='text' aria-label="Sizing example input" className="form-control" aria-describedby="inputGroup-sizing-default" name='nickname' id='nickname' onChange={handleInputsNick}></input>
    
      </div>
      
      
      <div className="input-group mb-3">
        <div className="input-group-prepend">
          <span className="input-group-text" id="inputGroup-sizing-default">Mensaje</span>
        </div>
        
        <input type='text' aria-label="Sizing example input" className="form-control" aria-describedby="inputGroup-sizing-default" name='message' id='message' onChange={handleInputsMessage} value={msg} onKeyPress={handleMensajesActivosKenEnter}></input>
  
      </div>
      <div className="d-grid gap-2">
        <button className="btn btn-primary btn-lg btn-block" type='button' onClick={handleMensajesActivos} >Send</button>
      </div>
     
        
        
        </div>
        
        


        <div className="col-4">
            <h3># Usuario activos ({users})</h3>
            
        </div>
     </div>
     
     
     
    </div>
  );
    
}

export default ClienteSocket;
