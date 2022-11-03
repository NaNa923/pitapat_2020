import React from "react";

const Aboutus = ({sections}) => {
    return (
        <div id={sections[1]} className="element" name="section2">
            <div className="cont_wrap">
                <div className="textBox">
                    <div className="light">
                        <img src="images/light.png" alt="전구" />
                    </div>
                    <div className="title">
                        <h1>ABOUT US</h1>
                        <p>
                            기분 좋은 느낌
                            <br />
                            두근~😋두근거리는
                            <br />
                            설렘으로~
                        </p>
                    </div>
                    <p>
                        인식과 습관이 주는 편안함을 거부하고 새로운 기술에
                        두려워하지 않고
                        <br />
                        머릿속 상상이 실제가 되는 곳 피터패트!
                        <br />
                        우리는 누구와 무엇을 어떻게 해야 하는지 잘 알고
                        있습니다.
                        <br />
                        당신과 함께 두근거리는 설렘으로
                        <br />
                        성공하는 프로젝트를 만들어 가겠습니다.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Aboutus;
