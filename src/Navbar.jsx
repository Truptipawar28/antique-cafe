import React from 'react'

const Navbar = (props) => {

    const navMenu = props.navContent;
    return (
        <>
            <nav className="navbar fixed-top navbar-expand-lg">
                <div className="container">
                    {/* <a className="navbar-brand" href="#">Navbar</a> */}
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <i className="fa-solid fa-bars"></i>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto  justify-content-end">
                            {
                            navMenu.map((item) => {
                                return (
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">{item}</a>
                                    </li>
                                )
                            })
                            }
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar
