import React, {useEffect} from 'react';

const Items = ({m,i}) => {

    useEffect(()=>{
        console.log('Items render....')
    },[m])
    return (
       
            <div key={i}><strong>{m.user}</strong> {m.ms}</div>
        
    );
}

export default Items;
