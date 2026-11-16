import { useState } from 'react';


function Card({name,text,image,link}) {

    let [activeCard, setActiveCard] = useState(false)
   

    const ieliktGroza = ()=>{
        alert(link)
    }

    let activeCardBtn = ()=>{
        setActiveCard(true)
    }

    return ( 
    <>
       <div className={`border-2 p-3 rounded-md ${activeCard==true?'bg-blue-200':''}`} onClick={activeCardBtn}>
            <h3>{name}</h3>
            <img src={image} alt="attels" />
            <p>{text}</p>
            <button href={link} onClick={ieliktGroza} >Ielikt grozā</button>
       </div> 
    
    </> );
}

export default Card