import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
    return (<div className="container">
        <nav>
            <ul>

                <li>
                    <Link to='/'>HOME</Link>
                </li>

                <li>
                    <Link to='/about'>ABOUT US</Link>
                </li>

                <li>
                    <Link to='/contact'>CONTACT</Link>
                </li>

                <li>
                    <Link to='/help'>HELP</Link>
                </li>

                <li>
                    <Link to='/comments-list'>COMMENTS-LİST</Link>
                </li>

            </ul>
        </nav></div>
    )
}
