import React, { useEffect } from 'react';

const { kakao } = window;

const MapContainer = () => {

    useEffect(() => {
            const container = document.getElementById('myMap');
            const options = {
                center: new kakao.maps.LatLng(37.55521825149294, 126.93335241684997), // 지도의 중심좌표
                level: 3
            };
            const map = new kakao.maps.Map(container, options); // 지도 생성 

            // 마커가 표시될 위치
            var markerPosition  = new kakao.maps.LatLng(37.55521825149294, 126.93335241684997); 
         
            //마커 생성
            var marker = new kakao.maps.Marker({
                position: markerPosition
            });

            // 마커가 지도 위에 표시
            marker.setMap(map);
    },[]);

    return (
        <div id="myMap" style={{
            width: '100%',
            height: '100%'
        }}></div>
    );
};

export default MapContainer;

