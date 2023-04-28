import React from "react";

const Navbar = (props) => {
    return (
        <nav className="navbar text-white h-14 font-semibold">
            <a className="navbar-brand p-2 text-3xl" href="#">{props.title}</a>
            <a className="navbar-brand p-2" href="#">{props.home}</a>
            <a className="navbar-brand p-2" href="#">{props.about}</a>
        </nav>
    )
}

export default Navbar;

