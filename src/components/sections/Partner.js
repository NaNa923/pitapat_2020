import React from "react";

const partners = [1,2,3,4,5,6,7,8,9,10];
const partnerList = partners.map(partner => 
    <li key={partner}>
        <img src={`images/partner${partner}.png`} alt={`partner img${partner}`} />
    </li>
);

const Partner = ({sections}) => {

    return (
        <div id={sections[2]}>
            <div className="cont_wrap">
                <div className="textBox">
                    <div className="title">
                        <span className="icon"></span>
                        <h1>PARTNER</h1>   
                    </div>
                    <p>
                        피터패트는 다양한 고객사와 다양한 프로젝트를 성공적으로
                        진행 중입니다.
                    </p>
                </div>
                <div className="contentBox">
                     <ul>{partnerList}</ul> 
                </div>
            </div>
        </div>
    );
};

export default Partner;
