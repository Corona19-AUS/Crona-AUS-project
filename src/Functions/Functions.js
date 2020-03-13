import React from "react";

import { Tabs } from 'antd';
import Trending from "../Trending/Trending";
import OfficialNews from "../OfficialNews/OfficialNews";
import HealthInfo from "../HealthInfo/HealthInfo";
import Unconfirmed from "../UnconfirmInfor/Unconfirmed";
const { TabPane } = Tabs;

export default class States extends React.Component {




    render() {
        //tab 功能 的位置，加新模块就加tabpane，并在标签里面渲染新的组件

        return <div className="StateShow">
            <Tabs  size= "small" defaultActiveKey="1" >


                <TabPane  tab="趋势" key="1">
                    <Trending/>
                </TabPane>
                <TabPane   tab="官方新闻" key="2">
                    <OfficialNews/>
                </TabPane>
                <TabPane  tab="未证实" key="3">
                    <Unconfirmed/>
                </TabPane>
                <TabPane  tab="健康建议信息" key="4">
                    <HealthInfo/>
                </TabPane>
            </Tabs>

        </div>;
    };


}
