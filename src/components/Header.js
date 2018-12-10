import React from 'react'

import logo from '../assets/images/logo.svg';

const Header = (props) => (
    <header id="header" className="alt">
        <span className="logo"><img src={logo} alt="" /></span>
        <h1>Jeux de Génie du Québec</h1>
        <p>Un thème dont j&#39;ai oublié le nom</p>
    </header>
)

export default Header
