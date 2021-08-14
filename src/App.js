import React, {useState,useEffect} from 'react'
import ClienteSocket from './ClienteSocket'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import socket from'./socketIO'
import notification from 'alert-sound-notify'
//import noti from 'node-notifier'
import './App.css';

const  App=()=> {
const [msgxR,setMsgxR] = useState({user:'',ms:''})
const [usuarios,setUsuarios] = useState(0)
const [visible,setVisible] = useState(true)

  useEffect(()=>{
   
     socket.on('chat:message-recibed',(data)=>{
         console.log('render app ....recibido del socket server')
         setMsgxR({user:data.user,ms:data.mensajes})
         notification('glass')
      })

      socket.on('chat:connected',(data)=>{
        setUsuarios(data)
      })

      socket.on('disconnect',()=>{
        console.log('Socket desconnected')
      })
   
      
    
   return (setVisible(false))  

  },[])

return(
  <>
      <ClienteSocket msgxR={msgxR} users={usuarios} />
  </>
)


}

export default App;
