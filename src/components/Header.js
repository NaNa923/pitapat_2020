import React from "react";
import "./Header.css";

const Header = () => {
    const menu = [
        { className: "menu_link", children: "OURWORK" },
        { className: "menu_link", children: "ABOUT US" },
        { className: "menu_link", children: "PARTNER" },
        { className: "menu_link", children: "CONTACT" },
    ];

    const menuList = menu.map((menu, index) => (
        <li className={menu.className} key={index}>
            {menu.children}
        </li>
    ));

    return (
        <header>
            <div className="leftBox logo"></div>
            <ul className="rightBox">{menuList}</ul>
            <div className="menuBox">
                <div className="menuIcon"></div>
            </div>
        </header>
    );
};

export default Header;
