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
            <li className="nav-item">
                <Link className="nav-link" to="/Function1"> Function1 </Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/Function2"> Function2 </Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/Function3"> Function3 </Link>
            </li>
        </ul>
    </div>

)

export default Menu;