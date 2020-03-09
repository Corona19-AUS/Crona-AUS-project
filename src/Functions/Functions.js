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
            <Tabs defaultActiveKey="1" onChange={callback}>

                <TabPane tab="当前各州数据" key="1">
                    <State/>
                </TabPane>
                <TabPane tab="各州变化趋势" key="2">
                    <Trending/>
                </TabPane>
                <TabPane tab="官方新闻搜集" key="3">
                    <OfficialNews/>
                </TabPane>
                <TabPane tab="小道消息搜集" key="4">
                    Content of Tab Pane 3
                </TabPane>
            </Tabs>

        </div>;
    };


}
