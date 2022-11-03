import React, { useState } from "react";
import axios from "axios";
import workData from '../../data/workData.json'

const Ourwork = ({sections}) => {

    let [style,setStyle] = useState({display:''});
    let [work,setWork] = useState(workData.list2);
    
    return (
        <div id={sections[0]} className="element" name="section1">
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
                        프로젝트를 성공적으로 수행하는 디지털 에이전시 입니다.s
                    </p>
                </div>
                <div className="contentBox">
                    {
                        work.map(function(name, index) {
                            return(
                                <div className={`works work_${index}`} key={index}>
                                    <img src={"images/work"+(name.id)+".png"} alt={name.title}/>
                                    <div className="workText">
                                        <p className="subtext">{name.category}</p>
                                        <p className="text">{name.title}</p>
                                    </div>
                                </div>
                            );
                        })
                    }
                </div>
                <button className="more" style={style} onClick={()=>{
                    axios.get('http://nana923.github.io/pitapat_2020/data/workData.json')
                    .then((result)=>{
                        setWork([...work,...result.data.list1]);
                        setStyle({display: 'none'});
                    })
                    .catch(()=>{
                        console.log('실패');
                    })
                }}>
                    MORE PROJECT
                </button>
            </div>
        </div>
    );
};

export default Ourwork;
