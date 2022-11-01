import React, { useCallback, useState } from "react";

const Ourwork = ({sections}) => {
    const [works, setWorks] = useState([
        {   
            id:1,
            img:'img/work1.png',
            subtext:'MOBILE APP RENEWAL',
            text:'현대해상 굿앤굿'
        },
        {
            id:2,
            img:'img/work2.png',
            subtext:'WEBSITE',
            text:'한화생명 온슈어패밀리'
        },
        {
            id:3,
            img:'img/work3.png',
            subtext:'MOBILE APP',
            text:'GS건설 자이'
        },
        {
            id:4,
            img:'img/work4.png',
            subtext:'BLOG WEBSITE',
            text:'LG디스플레이 블로그'
        },
        {
            id:5,
            img:'img/work5.png',
            subtext:'PDP PAGE',
            text:'LG Solar'
        },
        {
            id:6,
            img:'img/work6.png',
            subtext:'WEBSITE',
            text:'위닉스'
        },
        {
            id:7,
            img:'img/work7.png',
            subtext:'CAMPAIGN WEBSITE',
            text:'허벌라이프 엑스포'
        },
        {
            id:8,
            img:'img/work8.png',
            subtext:'WEBSITE',
            text:'LG화학블로그'
        }
    ]);

    //more버튼 누를시 배열추가
    const onClick = useCallback(
        () => {
            const work = [
                {
                    id:9,
                    img:'img/work9.png',
                    subtext:'WEBSITE',
                    text:'위니월드'
                },
                {
                    id:10,
                    img:'img/work10.png',
                    subtext:'WEBSITE',
                    text:'대한예수교장로회총회'
                },
                {  
                    id:11,
                    img:'img/work11.png',
                    subtext:'WEBSITE',
                    text:'둘코락스'
                },
                {
                    id:12,
                    img:'img/work12.png',
                    subtext:'WEBSITE',
                    text:'경찰박물관'
                }
            ];
            setWorks(works.concat(work));
            document.querySelector('.more').style.display ='none'; // more버튼 없애기
        },
        [works],
    );

    const workList = works.map(work =>
        <div className={`works work_${work.id}`} key={work.id}>
            <img src={work.img} alt={work.text}/>
             <div className="workText">
                <p className="subtext">{work.subtext}</p>
                <p className="text">{work.text}</p>
            </div>
        </div>
    );
    return (
        <div id={sections[0]}>
            <div className="cont_wrap">
                <div className="textBox">
                    <div className="title">
                        <span className="icon"></span>
                        <h1>OURWORK</h1>
                    </div>
                    <p>
                        피터패트는 사용자에게 이상적인 서비스를 제공하기 위해
                        무엇을 해야 하는지 같은 시각과 다른 관점으로 서비스를
                        제공하고 있습니다.
                        <br />
                        2004년 설립이래 다년간의 경험과 노하우를 기반으로 다양한
                        프로젝트를 성공적으로 수행하는 디지털 에이전시 입니다.
                    </p>
                </div>
                <div className="contentBox">{workList}</div>
                <button className="more" onClick={onClick}>
                    MORE PROJECT
                </button>
            </div>
        </div>
    );
};

export default Ourwork;
