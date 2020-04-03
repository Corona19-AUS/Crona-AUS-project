import React from "react";
import HospitalData from "./data/mapdataHos"
import Hostpital from "./map/hospital.png"
import ConfirmData from "./data/mapdataCon"
import Confirm from "./map/confirmed.png"
export default class MyMap extends React.Component {

    // constructor(props) {
    //     super(props);
    //
    //
    // }
    //
    //
    //
    //
    //
    //
    //
    // render()
    // {
    //
    //
    //     return <div className="MyMap">
    //
    //         {/*-33.8357205,151.2079973*/}
    //         <Map center={{lng: 151.2079973, lat: -33.8357205}} zoom="18" >
    //
    //
    //             <Marker position={{lng: 151.2079973, lat: -33.8357205}} />
    //             <NavigationControl />
    //
    //             <ScaleControl />
    //             <OverviewMapControl />
    //
    //             <InfoWindow position={{lng: 151.2079973, lat: -33.8357205}} text="North Sydeny 有一例确诊" title="08/03/2020"/>
    //         </Map>
    //     </div>;
    //
    //
    //
    //
    // }

    //  151.0627495,-33.8203444

    componentDidMount() {
        var hospitalData = HospitalData;
        var confirmData = ConfirmData;


            // [
            //     //-33.823859, 151.078895
            //     {time: "03-070", la: "151.078895", lo: "-33.823859"},
            //     {time: "03-07", la: "151.0627494", lo: "-33.8202444"},
            //     {time: "03-07", la: "151.0627495", lo: "-33.8204435"}
            //
            // ]


        const {BMap, BMAP_STATUS_SUCCESS, BMAP_ANCHOR_TOP_LEFT, BMAP_NAVIGATION_CONTROL_LARGE} = window;
        var map = new BMap.Map("allmap");
        var point = new BMap.Point(133.751567, -26.344589);

        map.centerAndZoom(point, 5);
        map.enableScrollWheelZoom();
        map.enableInertialDragging();
        map.enableContinuousZoom();
        var navigationControl = new BMap.NavigationControl({
            anchor: BMAP_ANCHOR_TOP_LEFT,
            type: BMAP_NAVIGATION_CONTROL_LARGE,
            enableGeolocation: true
        });
        map.addControl(navigationControl);

        //151.0627495,-33.8203444
        var opts = {
            width: 250,     // 信息窗口宽度
            height: 150,     // 信息窗口高度
            title: "检测医院", // 信息窗口标题
            enableMessage: true//设置允许信息窗发送短息
        };

        var confirmMes = {
            width: 250,     // 信息窗口宽度
            height: 150,     // 信息窗口高度
            title: "确诊事件", // 信息窗口标题
            enableMessage: true//设置允许信息窗发送短息

        }
        var geolocationControl = new BMap.GeolocationControl();
        geolocationControl.addEventListener("locationSuccess", function (e) {

        });
        geolocationControl.addEventListener("locationError", function (e) {
            alert(e.message);
        });
        map.addControl(geolocationControl);





        for (var i in hospitalData) {

            var point = new BMap.Point(hospitalData[i]['coor'][1], hospitalData[i]['coor'][0]);
            var myIcon = new BMap.Icon(Hostpital, new BMap.Size(32,32));

            var mk = new BMap.Marker(point,{icon:myIcon});

            map.addOverlay(mk);
            var content = hospitalData[i]['name']+"<p>phone: "+hospitalData[i]['phone']+"</p>address:"+hospitalData[i]['address']
            addClickHandler(content,mk);

        }

        for (var i in ConfirmData) {

            var point = new BMap.Point(ConfirmData[i]['coor'][1], ConfirmData[i]['coor'][0]);
            var myIcon = new BMap.Icon(Confirm, new BMap.Size(32,32));

            var mk = new BMap.Marker(point,{icon:myIcon});

            map.addOverlay(mk);
            var content = ConfirmData[i]['name']+"<p>时间: "+ConfirmData[i]['date']+"</p>address:"+ConfirmData[i]['address']
            addClickHandler_for_confirm(content,mk);

        }


        function addClickHandler(content,marker){
            marker.addEventListener("click",function(e){
                openInfo(content,e)}
            );
        }
        function openInfo(content,e){
            var p = e.target;
            var point = new BMap.Point(p.getPosition().lng, p.getPosition().lat);
            var infoWindow = new BMap.InfoWindow(content,opts);  // 创建信息窗口对象
            map.openInfoWindow(infoWindow,point); //开启信息窗口
        }
        function addClickHandler_for_confirm(content,marker){
            marker.addEventListener("click",function(e){
                openInfo_for_confirm(content,e)}
            );
        }
        function openInfo_for_confirm(content,e){
            var p = e.target;
            var point = new BMap.Point(p.getPosition().lng, p.getPosition().lat);
            var infoWindow = new BMap.InfoWindow(content,confirmMes);  // 创建信息窗口对象
            map.openInfoWindow(infoWindow,point); //开启信息窗口
        }

    }

    render() {

        return (
            <div>
                <div id='allmap' style={{
                    width: '100%',
                    height: '600px'
                }}></div>
            </div>
        )
    }

}
