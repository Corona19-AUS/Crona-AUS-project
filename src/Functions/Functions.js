import React from "react";
import {Card, Col, Row} from "antd";
import { Tabs } from 'antd';
import State from "../EachState/State";
import Trending from "../Trending/Trending";
import OfficialNews from "../OfficialNews/OfficialNews";
import HealthInfo from "../HealthInfo/HealthInfo";
import Unconfirmed from "../UnconfirmInfor/Unconfirmed";
const { TabPane } = Tabs;

export default class States extends React.Component {




    render() {



        return <div className="StateShow">
            <Tabs  size= "small" defaultActiveKey="1" >

                {/*<TabPane   tab="各州信息" key="1">*/}
                {/*    <State/>*/}
                {/*</TabPane>*/}
                <TabPane  tab="趋势" key="1">
                    <Trending/>
                </TabPane>
                <TabPane   tab="官方新闻" key="2">
                    <OfficialNews/>
                </TabPane>
                <TabPane  tab="谣言" key="3">
                    <Unconfirmed/>
                </TabPane>
                <TabPane  tab="健康建议信息" key="4">
                    <HealthInfo/>
                </TabPane>
            </Tabs>

        </div>;
    };


}
