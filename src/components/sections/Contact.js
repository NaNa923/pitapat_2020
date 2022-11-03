import React from "react";
import MapContainer from "../MapContainer";


const contacdata = [
    {
        title: 'LOCATION',
        description: '서울특별시 마포구 신촌로14길 20 태인빌딩 5층'
    },
    {
        title: 'EMAIL',
        description: 'webmaster@pitapat.net'
    },
    {
        title: 'CONTACT',
        description: 'TEL 070-7510-4328'
    }
]
const contacdataList = contacdata.map( (data, index) => <li key={index}>
        <b>{data.title}</b>
        <p>{data.description}</p> 
    </li>
);

const Contact = ({sections}) => {

    return (
        <div id={sections[3]}>
            <div className="cont_wrap">
                <div className="mapBox">
                    <MapContainer />
                </div>
                <div className="contactBox">
                    <div className="co-leftBox">
                        <h1>CONTACT US</h1>
                        <button>문의하기</button>
                    </div>
                    <ul className="co-rightBox">
                        {contacdataList}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Contact;
