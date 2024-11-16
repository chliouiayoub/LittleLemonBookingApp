import React from "react";
import tagine from "../images/tagine.avif"
import { Link } from "react-router-dom";


const Header = () => {
    return(
        <header>
            <section>
            <div>
            <h2>Little Lemon</h2>
            <h3>Morocco</h3>
            <p>Let the lemon lemoning!</p>
            <Link to="/PersonnalInfos"><button aria-label="On Click">Reserve your table</button></Link>
            </div>
            <div>
                <img src={tagine} />
            </div>
            </section>
        </header>
    )
}

export default Header;