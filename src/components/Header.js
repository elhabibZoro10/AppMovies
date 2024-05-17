import React from 'react';

const Header = () => {
    return (
        <div className="header">
            <div className="container">
                <div className="logo">
                    <a href="#">Movies</a>
                </div>
                <ul className="nav-links">
                    <li>
                        <a href="#">Watch List</a>
                    </li>
                    <li>
                        <a href="#">Watched</a>
                    </li>
                    <li>
                        <a className="btn" href="#">
                            Add
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Header;
