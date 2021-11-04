import './Nav.css'
import React from 'react'
import { Link } from 'react-router-dom'

export default props =>
    <aside className="menu-area">
        <nav className="menu">
            
            <Link to="/">
                <i className="fa fa-home"></i> Início
            </Link>
            <Link to="/clientes">
                <i className="fa fa-users"></i> Clientes
            </Link>
            <Link to="/usinas">
                <i className="fa fa-flash"></i> Usinas
            </Link>
            <Link to="/rentabilidade">
                <i className="fa fa-money"></i> Rentabilidade
            </Link>
        </nav>
    </aside>