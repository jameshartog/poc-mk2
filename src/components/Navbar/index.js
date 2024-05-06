import React from "react";
import {
    Nav,
    NavLink,
    Bars,
    NavMenu,
} from "./NavbarElements";

const Navbar = () => {
    return (
        <>
            <Nav>
                <Bars />

                <NavMenu>
                    <NavLink to="/" tabIndex={1}>
                        Home
                    </NavLink>
                    <NavLink to="/about" tabIndex={2}>
                        About
                    </NavLink>
                </NavMenu>
            </Nav>
        </>
    );
};

export default Navbar;