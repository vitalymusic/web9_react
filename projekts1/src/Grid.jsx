import { useState } from 'react';
import Card from './Card';


function Grid() {

let [active, setActive] = useState(false)

let handleClick = (id)=>{
    setActive(id)
}

    return ( 
    <div className='p-4 grid grid-cols-3 gap-4'>
        <Card 
            name="Kartiņa1" 
            text="Teksts par kartiņu 1" image="https://picsum.photos/id/5/400" link="https://picsum.photos/id/5/400" active={active === 1} 
            onClick = {() => handleClick(1)}/>

        <Card 
            name="Kartiņa2" 
            text="Teksts par kartiņu 2" image="https://picsum.photos/id/8/400" link="https://picsum.photos/id/8/400" active={active === 2}  
            onClick = {() => handleClick(2)}/>
        <Card 
            name="Kartiņa3" 
            text="Teksts par kartiņu 3" image="https://picsum.photos/id/10/400" link="https://picsum.photos/id/10/400" active={active === 3}  
            onClick = {() => handleClick(3)}/>

        <Card 
            name="Kartiņa4" 
            text="Teksts par kartiņu 4" image="https://picsum.photos/id/12/400" link="https://picsum.photos/id/12/400" active={active === 4}  onClick = {() => handleClick(4)} />
        <Card 
            name="Kartiņa5" 
            text="Teksts par kartiņu 5" image="https://picsum.photos/id/14/400" link="https://picsum.photos/id/14/400" active={active === 5}  onClick = {() => handleClick(5)}/>
        <Card 
            name="Kartiņa6" 
            text="Teksts par kartiņu 6" image="https://picsum.photos/id/16/400" link="https://picsum.photos/id/16/400" active={active === 6} onClick = {() => handleClick(6)} />

    </div> );
}

export default Grid;