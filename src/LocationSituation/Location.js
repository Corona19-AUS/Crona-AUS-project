import React from "react";


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
        var jsondatatest =
            [
                //-33.823859, 151.078895
                {time: "03-070", la: "151.078895", lo: "-33.823859"},
                {time: "03-07", la: "151.0627494", lo: "-33.8202444"},
                {time: "03-07", la: "151.0627495", lo: "-33.8204435"}

            ]


        const {BMap, BMAP_STATUS_SUCCESS, BMAP_ANCHOR_TOP_LEFT, BMAP_NAVIGATION_CONTROL_LARGE} = window;
        var map = new BMap.Map("allmap");
        var point = new BMap.Point(116.404, 39.915);
        map.centerAndZoom(point, 18);
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
            height: 80,     // 信息窗口高度
            title: "疫情内容", // 信息窗口标题
            enableMessage: true//设置允许信息窗发送短息
        };
        var geolocationControl = new BMap.GeolocationControl();
        geolocationControl.addEventListener("locationSuccess", function (e) {

        });
        geolocationControl.addEventListener("locationError", function (e) {
            alert(e.message);
        });
        map.addControl(geolocationControl);
        var geolocation = new BMap.Geolocation();
        geolocation.getCurrentPosition(function (r) {
            if (this.getStatus() == BMAP_STATUS_SUCCESS) {


                map.panTo(r.point);
                for (var i in jsondatatest) {
                    var point = new BMap.Point(jsondatatest[i].la, jsondatatest[i].lo);

                    var mk = new BMap.Marker(point);

                    map.addOverlay(mk);
                    var label = new BMap.Label("3", {offset: new BMap.Size(-10, -20)});
                    label.setStyle({
                        color: "red",
                        fontSize: "15px",
                        border: "0",
                        height: "20px",
                        backgroundColor: "",
                        lineHeight: "20px",
                        fontFamily: "微软雅黑"
                    });
                    mk.setLabel(label)


                }
            } else {
                alert('failed' + this.getStatus());
            }
        }, {enableHighAccuracy: true})
    }

    render() {
        return (
            <div>
                <div id='allmap' style={{
                    width: '100%',
                    height: '300px'
                }}></div>
            </div>
        )
    }

}
