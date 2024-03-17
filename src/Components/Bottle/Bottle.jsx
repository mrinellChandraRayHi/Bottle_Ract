import { useState } from 'react';
import './Bottle.css'
export default function Bottle({bottle, handleShowBtn}) {
    console.log(bottle);
    const{id, image, material, name, price, size}=bottle;
    const [drink, setDrink]=useState(false);
    const handleClick=()=>{
        setDrink(!drink);
    }
    return (
        <div className={`bottle ${drink? 'bgChange': 'notCahange'}`}>
            <h1>Name : {name}</h1>
            <img className="imgSize" src={image} alt="" />
            <h3>Material : {material}</h3>
            <p>Price : {price}</p>
            <p>Id : {id}</p>
            <p>Size : {size}</p>
            <button onClick={()=>handleShowBtn(bottle)} className='btn' type="button">Show</button>
            <button onClick={handleClick} className='btn' type="button">{drink? "Want": "Don't"}</button>
            {drink?"I drink it":"I don't want"}
        </div>
    )
}
