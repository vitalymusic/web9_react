import { useState } from 'react';


function Card({name,text,image,link,active,onClick }) {

    const [activeCard, setActiveCard] = useState(null);
    const handleClick = (id) => {
        setActiveCard(id);
    };

    let [showImage, setShowImage] = useState(true);
    let [buttonText, setButtonText] = useState("Paslēpt attēlu");

    let [cardText, setCardText] = useState(text)

    let handleImage = ()=>{
        setShowImage(!showImage)

        showImage?setButtonText("Parādīt attēlu"):setButtonText("Paslēpt attēlu")
    }

   
    const ieliktGroza = ()=>{

        alert(link)
    }


    const handleTextInput = (e)=>{
        setCardText(e.target.value)
    }

    return ( 
    <>
       <div className={`border-2 p-3 rounded-md ${active==true?'bg-blue-200':''}`} onClick={handleClick}>
            <h3>{name}</h3>
                {
                showImage==true&&(<img src={image} alt="attels" />)
                }
            <button onClick={handleImage}>{buttonText}</button><br />
            <input type="text" id="" placeholder='Ievadi tekstu' onInput={handleTextInput}/>
            <p>{cardText}</p>
            <button href={link} onClick={ieliktGroza} >Ielikt grozā</button>
       </div> 
    
    </> );
}

export default Card