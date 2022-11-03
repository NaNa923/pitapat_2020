import React from "react";
import './App.css';
import './components/style.css';
import Footer from "./components/Footer";
import Header from "./components/Header";
import Aboutus from "./components/sections/Aboutus";
import Contact from "./components/sections/Contact";
import Main from "./components/sections/Main";
import Ourwork from "./components/sections/Ourwork";
import Partner from "./components/sections/Partner";
import { Link, Element as scroll} from 'react-scroll';

let pointer = ({cursor:'pointer'});




function App() {

    // 메인로고버튼,top버튼누르면 맨위로 올라가게하는 함수
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }

    const sections = ['ourwork','aboutus','partner','contact'];

    return( 
        <div className="App">
            <Header scrollToTop={scrollToTop}/>
            <div id="wrap">
                <div className="container">          
                    <Main />
                    <Link style={pointer} activeClass="active" className="letsgo" to="section1" spy={true} smooth={true} duration={500} >
                        LET'S GO 
                        <img src="images/arrow_icon.png" alt="화살표이미지" />                                  
                    </Link>   
                    <Ourwork sections={sections}/>
                    <Aboutus sections={sections}/>
                    <Partner sections={sections}/>
                    <Contact sections={sections}/>
                </div>
            <Footer scrollToTop={scrollToTop}/>
            </div> 
        </div>
    )
}

export default App;