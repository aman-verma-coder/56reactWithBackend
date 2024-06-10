import React from 'react';
import { useNavigate } from 'react-router-dom';
function About() {
    const navigate=useNavigate();
    function clickHandler() {
        navigate("/labs");
    }
    return(
        <div>
            <div>
                About
            </div>
            <button onClick={clickHandler}>Labs</button>
        </div>
    )
}
export default About;