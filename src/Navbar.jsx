import React from 'react';

function Navbar({ changeSection }) {
    return (
        <nav className="navbar">
            <ul>
                <li onClick={() => changeSection('home')} className='home'>All Items</li>
                <li onClick={() => changeSection('hot-coffee')} className='hot-coffee'>Hot Coffee</li>
                <li onClick={() => changeSection('hot-non-coffee')} className='hot-non-coffee'>Hot Non-Coffee</li>
                <li onClick={() => changeSection('iced-coffee')} className='iced-coffee'>Iced Coffee</li>
                <li onClick={() => changeSection('iced-non-coffee')} className='iced-non-coffee'>Iced Non-Coffee</li>
                <li onClick={() => changeSection('frappes')} className='frappes'>Frappés</li>
                <li onClick={() => changeSection('waffles')} className='waffles'>Waffles</li>
                <li onClick={() => changeSection('prepping-guide')} className='prepping-guide'>Prepping Guide</li>
                <li onClick={() => changeSection('other-food-items')} className='other-food-items'>Sandwiches, Bagels, Muffins, and Smoothie Bowls</li>

            </ul>
        </nav>
    )
}


export default Navbar;