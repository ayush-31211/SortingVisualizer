import React from 'react';
import './component.css';

function Bar(params)
{
    return (
        <div
        className="Bar">

        <div
        style={{
            
            width:`${params.width*2}vw`,
            height:`${params.height*5}px`,
            backgroundColor:"white",
            margin:`${2}px` 
        }}
        >
        </div>
        <p style={{color:"white",textAlign:'center'}}>{params.height}</p>
        </div>
    )
}

export default Bar;