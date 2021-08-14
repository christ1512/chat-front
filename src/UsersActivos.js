import React,{useState} from 'react';

const UsersActivos = ({msgxR}) => {
cosnt [users,setUsers] = useState([])

const validateUsersList =(msgxR)=>{
       
}

    return (
        <div>
            {users.map((u,index) => <li key={index}>{u}</li>)}
        </div>
    );
}

export default UsersActivos;
