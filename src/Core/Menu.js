import React from 'react'
import { Link } from "react-router-dom"

const Menu = () => (
    <div>
        <ul className="nav nav-tabs bg-dark">
            <li className="nav-item">
                <Link className="nav-link" to="/"> Home </Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/Pokemon"> Pokemon </Link>
            </li>
        </ul>
    </div>

)

export default Menu;