import React from "react";
import {Card, Col, Row} from "antd";
import { Tabs } from 'antd';
import State from "../EachState/State";
import Trending from "../Trending/Trending";
import OfficialNews from "../OfficialNews/OfficialNews";

const { TabPane } = Tabs;
function callback(key) {
    console.log(key);
}
export default class States extends React.Component {




    render() {



        return <div className="StateShow">
            <Tabs  size= "small" defaultActiveKey="1" onChange={callback}>

                <TabPane   tab="各州信息" key="1">
                    <State/>
                </TabPane>
                <TabPane  tab="趋势" key="2">
                    <Trending/>
                </TabPane>
                <TabPane   tab="官方新闻" key="3">
                    <OfficialNews/>
                </TabPane>
                <TabPane  tab="未确定信息" key="4">
                    Content of Tab Pane 3
                </TabPane>
                <TabPane  tab="健康建议信息" key="5">
                    Content of Tab Pane 3
                </TabPane>
            </Tabs>

        </div>;
    };


}
