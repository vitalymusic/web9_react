import { useState } from 'react';


function Card({name,text,image,link,active}) {

    let [showImage, setShowImage] = useState(true);
    let [buttonText, setButtonText] = useState("Paslēpt attēlu");

    let handleImage = ()=>{
        setShowImage(!showImage)

        showImage==true?setButtonText("Paslēpt attēlu"):setButtonText("Parādīt attēlu")
        console.log(showImage)
    }

   
    const ieliktGroza = ()=>{

        alert(link)
    }


    return ( 
    <>
       <div className={`border-2 p-3 rounded-md ${active==true?'bg-blue-200':''}`}>
            <h3>{name}</h3>
            <img src={image} alt="attels" />
            <button onClick={handleImage}>{buttonText}</button>
            <p>{text}</p>
            <button href={link} onClick={ieliktGroza} >Ielikt grozā</button>
       </div> 
    
    </> );
}

export default Card