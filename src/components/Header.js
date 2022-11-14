import { useEffect, useRef, useState } from "react";
import "components/Header.css";

import { Link, Element as scroll} from 'react-scroll';

let pointer = ({cursor:'pointer'});


const menu = [
    { className: "menu_link", children: "OURWORK" },
    { className: "menu_link", children: "ABOUT US" },
    { className: "menu_link", children: "PARTNER" },
    { className: "menu_link", children: "CONTACT" },
];

function HeaderOn() {
    //모바일 에서만 함수 작동!!
    if(window.innerWidth <= 870){
        document.querySelector('header').classList.toggle('on');
    }
}

const menuList = menu.map((menu, index) => (
    <li className={menu.className} key={index}>
        <Link style={pointer} activeClass="active" className="menu_link" to={"section"+(index+1)} spy={true} smooth={true} duration={500} onClick={HeaderOn} >{menu.children}</Link>
    </li>
));

const Header = ({scrollToTop, throttle}) => {

    const [hide, setHide] = useState(false);
    const [colorchange, setColorchange] = useState(false);
    const [pageY, setPageY] = useState(0);
    const documentRef = useRef(document);


    const handleScroll = () => {
        if(window.innerWidth > 870){
            const { pageYOffset } = window;
            const deltaY = pageYOffset - pageY; // 스크롤 움직인 값
            const hide = pageYOffset !== 0 && deltaY >= 0; // 스크롤 움직인 값이 0이상이고 스크롤위치가 0이 아니면 숨기기
            const colorchange = pageYOffset > 900; // 900이상 내려가면 colorchanges

            setHide(hide); // hide값 true, false설정
            setPageY(pageYOffset); // 현재의 페이지 scroll값 저장
            setColorchange(colorchange); // colorchange값 true, false설정;
        }
    };

    const throttleScroll = throttle(handleScroll, 50);

    useEffect(() => {
        documentRef.current.addEventListener('scroll', throttleScroll);
        return () => documentRef.current.removeEventListener('scroll', throttleScroll);
    }, [pageY]);



    return (
        <header>
            <div className={ "headerWrap " +(hide ? 'hide' : '' || colorchange ? 'colorchange' : '')}>
                <button style={pointer} className="leftBox logo" onClick={scrollToTop}></button>
                <ul className="rightBox">{menuList}</ul>
                <div className="menuBox" onClick={HeaderOn}>
                    <div className="menuIcon"></div>
                </div>
            </div>
        </header>
    );
};

export default Header;
