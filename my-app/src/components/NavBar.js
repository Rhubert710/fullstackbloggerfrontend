import { Routes, Route, Link } from "react-router-dom";
import { useState } from "react";


function Navbar(props)
{
 
    const [activeButton, setActiveButton] = useState('Blogs')
    const buttons = ['Blogs', 'Create Blog']

    function setActive(params) 
    {
        
    }
    return (
        
        <nav id="nav">

            {buttons.map((buttonName, i) => (

                <Link to={buttonName.replace(" ", "-")}

                    key={`button-${i}`}

                    onClick={(e) => setActiveButton( buttonName )}

                    className={buttonName == activeButton? "activeButton navButton" : "navButton"}



                >
                    
                    {buttonName.toUpperCase()}

                </Link>
            ))}
        </nav>
    )
}

export default Navbar