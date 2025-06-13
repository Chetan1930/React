import react, { useState } from "react";


const TextboxComponent = ({handleData})=>{

    
    const [text,setText] = useState({
        textValue:""
    });
    return (
        <>
        <label >Input</label>
        <input type="number" onChange={(e)=>handleData(e.target.value)} name="text"  placeholder="value : "/>
        </>
        
    );
};

export default TextboxComponent;