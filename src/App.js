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
            <Header scrollToTop={scrollToTop} throttle={throttle}/>
            <div id="wrap">
                <div className="container">          
                    <Main /> 
                    <Ourwork sections={sections}/>
                    <Aboutus sections={sections} throttle={throttle}/>
                    <Partner sections={sections}/>
                    <Contact sections={sections}/>
                </div>
            <Footer scrollToTop={scrollToTop}/>
            </div> 
        </div>
    )
}

export default App;