import React from "react";

import { Tabs } from 'antd';
import Trending from "../Trending/Trending";
import OfficialNews from "../OfficialNews/OfficialNews";
import HealthInfo from "../HealthInfo/HealthInfo";
import Unconfirmed from "../UnconfirmInfor/Unconfirmed";
import MbMap from "../OtherMap/OtherMap";
import Location from "../LocationSituation/Location";
import ExpertQA from "../ExpertQA/ExpertQA";

import {FormattedMessage} from "react-intl";
const { TabPane } = Tabs;




export default class States extends React.Component {




    render() {
        //tab 功能 的位置，加新模块就加tabpane，并在标签里面渲染新的组件

        return <div className="StateShow">
            <Tabs  size= "small" defaultActiveKey="1" >


                <TabPane  tab={  <FormattedMessage id="function-Trending" values={{ name: 'React' }} />} key="1">
                    <Trending/>
                </TabPane>
                <TabPane   tab={  <FormattedMessage id="OfficialNews" values={{ name: 'React' }} />} key="2">
                    <OfficialNews/>
                </TabPane>
                <TabPane  tab={  <FormattedMessage id="Unconfirm" values={{ name: 'React' }} />} key="3">
                    <Unconfirmed/>
                </TabPane>
                <TabPane  tab="健康建议信息" key="4">
                    <HealthInfo/>
                </TabPane>
                <TabPane  tab="医疗监测点与事件地图" key="5">
                    <div className="AspNet-WebPart">
                        <Location/>
                    </div>
                </TabPane>
                <TabPane  tab="医疗专家Q&A" key="6">
                    <ExpertQA/>

                </TabPane>


            </Tabs>

        </div>;
    };


}
