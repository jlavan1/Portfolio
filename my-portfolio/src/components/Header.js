import React from 'react';
import './Header.css';



const header = () => {
    return (
        <nav>
            <div class="logo">
                <h4>Malaji Tech</h4>
            </div>
                <ul class='nav-links'>
                    <li> <a class='nav-link active' href='home'>Home</a> </li>
                    <li> <a class='nav-link' href='discover'>Discover</a> </li>
                    <li> <a class='nav-link' href='schedule'>Schedule</a> </li>
                </ul>
        </nav>
    )
}

export default header;