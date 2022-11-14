import React from "react";
import { Link, Element as scroll} from 'react-scroll';

let pointer = ({cursor:'pointer'});

const Main = () => {
    return (
        <div id="main">
            <div className="cont_wrap">
                <ul>
                   <li className="itemBox">
                        <div className="itemBox_01_area">
                            <div className="poster_image">
                                <div className="poster_title">
                                        <img
                                            src="https://nana923.github.io/pitapat_2020/images/main_visual.gif"
                                            alt="THE HAPPY OF THE DIGITAL WORLD PIT-A-PAT"
                                        />
                                </div>
                            </div>
                        </div>
                   </li>
                 </ul>
            </div>

            <Link style={pointer} activeClass="active" className="letsgo" to="section1" spy={true} smooth={true} duration={500} >
                LET'S GO 
                <img src="https://nana923.github.io/pitapat_2020/images/arrow_icon.png" alt="화살표이미지" />                                  
            </Link>  
        </div>

    );
};

export default Main;
