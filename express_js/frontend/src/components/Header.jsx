import React, { useEffect, useState } from "react";
import "./header.css";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
    const [active, setActive] = useState("Home");

    const location = useLocation();

    console.log(location.pathname);

    useEffect(() => {
        if (location.pathname === "/") {
            setActive("Home");
        } else if (location.pathname === "/add") {
            setActive("Add");
        }
    }, [location]);

    return (
        <div className="header">
            <Link to={"/"} className="logo">
                User Management System
            </Link>
            <div className="header-right">
                <Link to={"/"} className={active === "Home" ? "active" : ""}>
                    Home
                </Link>
                <Link to={"/add"} className={active === "Add" ? "active" : ""}>
                    Add New User
                </Link>
            </div>
        </div>
    );
};

export default Header;
