import React from 'react';

function Navbar({ changeSection }) {
    return (
        <nav className="navbar">
            <ul>
                <li onClick={() => changeSection('home')}>Home</li>
                <li onClick={() => changeSection('hot-coffee')}>Hot Coffee</li>
                <li onClick={() => changeSection('iced-coffee')}>Iced Coffee</li>
                <li onClick={() => changeSection('iced-non-coffee')}>Iced Non-Coffee</li>
                <li onClick={() => changeSection('frappes')}>Frappés</li>
                <li onClick={() => changeSection('waffles')}>Waffles</li>
                <li onClick={() => changeSection('prepping-guide')}>Prepping Guide</li>

            </ul>
        </nav>
    )
}


export default Navbar;