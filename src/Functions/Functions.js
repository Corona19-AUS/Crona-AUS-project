import React from "react";
import {Card, Col, Row} from "antd";
import { Tabs } from 'antd';
import State from "../EachState/State";
import Trending from "../Trending/Trending";
import OfficialNews from "../OfficialNews/OfficialNews";
import HealthInfo from "../HealthInfo/HealthInfo";
import Unconfirmed from "../UnconfirmInfor/Unconfirmed";
import MbMap from "../OtherMap/OtherMap";
import ExpertQA from "../ExpertQA/ExpertQA";
import {FormattedMessage} from "react-intl";
const { TabPane } = Tabs;

export default class States extends React.Component {




    render() {



        return <div className="StateShow">
            <Tabs  size= "small" defaultActiveKey="1" >

                {/*<TabPane   tab="各州信息" key="1">*/}
                {/*    <State/>*/}
                {/*</TabPane>*/}
                <TabPane  tab={  <FormattedMessage id="function-Trending" values={{ name: 'React' }} />} key="1">
                    <Trending/>
                </TabPane>
                <TabPane   tab={  <FormattedMessage id="function-OfficialNews" values={{ name: 'React' }} />}  key="2">
                    <OfficialNews/>
                </TabPane>
             
                <TabPane  tab={  <FormattedMessage id="function-QandA" values={{ name: 'React' }} />} key="3">
                    <ExpertQA/>

                </TabPane>

               
                <TabPane   tab={  <FormattedMessage id="function-Healthinfor" values={{ name: 'React' }} />} key="4">
                    <HealthInfo/>
                </TabPane>
                 
            </Tabs>

        </div>;
    };


}
