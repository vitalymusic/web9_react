import { useState } from 'react';


function Card({name,text,image,link,active}) {

   
    const ieliktGroza = ()=>{

        alert(link)
    }


    return ( 
    <>
       <div className={`border-2 p-3 rounded-md ${active==true?'bg-blue-200':''}`}>
            <h3>{name}</h3>
            <img src={image} alt="attels" />
            <p>{text}</p>
            <button href={link} onClick={ieliktGroza} >Ielikt grozā</button>
       </div> 
    
    </> );
}

export default Card