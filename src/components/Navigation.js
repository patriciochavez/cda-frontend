import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navigation extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container">
                    <Link className="navbar-brand" to="/">
                        CDA-DEV
                    </Link>
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <Link className="nav-link" to="/product">
                                Listar Productos
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/product">
                                Crear Producto
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/user">
                                Crear Usuario
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}
