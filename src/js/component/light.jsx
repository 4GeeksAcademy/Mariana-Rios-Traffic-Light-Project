import React, {useState} from 'react';


const Light = () => {
    const [color, setColor] = useState("");


    return(
        <div className='trafficLight'>
            <div className={"red light" + (color == "red" ? " selected" : "")} onClick={() => setColor("red")}></div>
            <div className={"yellow light" + (color == "yellow" ? " selected" : "")} onClick={() => setColor("yellow")}></div>
            <div className={"green light" + (color == "green" ? " selected" : "")} onClick={() => setColor("green")}></div>
        </div>
    );
};

export default Light;

