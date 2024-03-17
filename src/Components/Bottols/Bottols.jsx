import { useEffect, useState } from "react"
import Bottle from "../Bottle/Bottle";
import './Bottols.css'

export default function Bottols() {
    const [bottos, setBottols]=useState([]);
    const [show, setShow]=useState([]);
    useEffect(()=>{
        const fethData=async()=>{
            const res=await fetch('Bottole.json');
            const data=await res.json();
            setBottols(data);
            console.log(bottos);
        }
        fethData();
    },[])
    const handleShowBtn=(bottle)=>{
        const addNewbottle=[...show, bottle];
        setShow(addNewbottle);
    }
    return (
        <div>
            <h1>Bottols Length : {bottos.length}</h1>
            <div>
                <h1>Add bottle : {show.length}</h1>
                <ul>
                    {show.map((bottle)=><li>{bottle.name}</li>)}
                </ul>
            </div>
            <div className="bottols">
                {bottos.map((bottle)=><Bottle key={bottle.id} bottle={bottle} handleShowBtn={handleShowBtn}/>)}
            </div>
        </div>
    )
}
