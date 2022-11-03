import { useEffect, useRef, useState } from "react";
import "./Header.css";
import styled from "styled-components";

import { Link, Element as scroll} from 'react-scroll';

let pointer = ({cursor:'pointer'});

const HeaderWrap = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    z-index: 1;
    transition: 0.4s ease;
    color: #fff;
    &.hide {
        transform: translateY(-145px);
    }
    &.colorchange .rightBox li a {
        color: #161616;
    }
    &.colorchange .rightBox li:last-child {
        border:  1px solid #161616;
    }
    &.colorchange .rightBox li:last-child:hover {
        background-color: #161616;   
    }
    &.colorchange .rightBox li:last-child:hover a {
        color: #fff;
    }
`;

const menu = [
    { className: "menu_link", children: "OURWORK" },
    { className: "menu_link", children: "ABOUT US" },
    { className: "menu_link", children: "PARTNER" },
    { className: "menu_link", children: "CONTACT" },
];

const menuList = menu.map((menu, index) => (
    <li className={menu.className} key={index}>
        <Link style={pointer} activeClass="active" className="menu_link" to={"section"+(index+1)} spy={true} smooth={true} duration={500} >{menu.children}</Link>
    </li>
));

//throttle : 이벤트가 발생하고서 일정 주기마다 이벤트가 발생되도록 함 
//(너무 빠르게 scroll이벤트가 발생하는것 방지)
const throttle = function (callback, waitTime) {
    let timerId = null;
    return (e) => {
        if (timerId) return;
        timerId = setTimeout(() => {
            callback.call(this, e);
            timerId = null;
        }, waitTime);
    };
};

const Header = ({scrollToTop}) => {

    const [hide, setHide] = useState(false);
    const [colorchange, setColorchange] = useState(false);
    const [pageY, setPageY] = useState(0);
    const documentRef = useRef(document);

    const handleScroll = () => {
        const { pageYOffset } = window;
        const deltaY = pageYOffset - pageY; // 스크롤 움직인 값
        const hide = pageYOffset !== 0 && deltaY >= 0; // 스크롤 움직인 값이 0이상이고 스크롤위치가 0이 아니면 숨기기
        const colorchange = pageYOffset > 1200; // 145이상으로 내려가면 colorchange

        setHide(hide); // hide값 true, false설정
        setPageY(pageYOffset); // 현재의 페이지scroll값 저장
        setColorchange(colorchange); // colorchange값 true, false설정
    };

    const throttleScroll = throttle(handleScroll, 50);

    useEffect(() => {
        documentRef.current.addEventListener('scroll', throttleScroll);
        return () => documentRef.current.removeEventListener('scroll', throttleScroll);
    }, [pageY]);

    return (
        <header>
            <HeaderWrap className={hide ? 'hide' : '' || colorchange ? 'colorchange' : ''}>
                <button style={pointer} className="leftBox logo" onClick={scrollToTop}></button>
                <ul className="rightBox">{menuList}</ul>
                <div className="menuBox">
                    <div className="menuIcon"></div>
                </div>
            </HeaderWrap>
        </header>
    );
};

export default Header;
