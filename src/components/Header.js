import { useEffect, useRef, useState } from "react";
import "./Header.css";
import styled from "styled-components";

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
    &.colorchange {
        color: #161616;
    }
    &.colorchange .rightBox li:last-child {
        border:  1px solid #161616;
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
        {menu.children}
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

const Header = () => {

    const [hide, setHide] = useState(false);
    const [colorchange, setColorchange] = useState(false);
    const [pageY, setPageY] = useState(0);
    const documentRef = useRef(document);

    const handleScroll = () => {
        const { pageYOffset } = window;
        const deltaY = pageYOffset - pageY; // 스크롤 움직인 값
        const hide = pageYOffset !== 0 && deltaY >= 0; // 스크롤 움직인 값이 0이상이고 스크롤위치가 0이 아니면 숨기기
        const colorchange = pageYOffset > 145; // 145이상으로 내려가면 colorchange

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
                <div className="leftBox logo"></div>
                <ul className="rightBox">{menuList}</ul>
                <div className="menuBox">
                    <div className="menuIcon"></div>
                </div>
            </HeaderWrap>
        </header>
    );
};

export default Header;
