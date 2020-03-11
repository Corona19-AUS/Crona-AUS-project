import React from 'react';
import {Table} from 'antd';
import {Statistic, Card, Col, Row} from 'antd';
import {ArrowUpOutlined, ArrowDownOutlined} from '@ant-design/icons';

// import getJsonObject  from "../my_data_process";

function get_trending (numberString){
    if(parseInt(numberString)>=0)
    {
        return <ArrowUpOutlined/>
    }
    else
    {
        return <ArrowDownOutlined/>
    }

}

export default class DataVew extends React.Component {



    constructor(props) {
        super(props);
        this.state={
            Time:"03-09-2020",
            Confirmed:"0",
            Confirmed_new:"0",
            Confirmed_trending:"",
            Recovered:"0",
            Recovered_new:"0",
            Recovered_trending:"",
            Deaths:"0",
            Deaths_new:"0",
            Deaths_trending:"",
            Existing:"0",
            Existing_new:"0",
            Existing_trending:"0",
        }
        fetch("./Data/DataView-data.json")
            .then(res => res.json())
            .then(json =>
            {


                this.setState(
                    {
                    	Time: json[0]["Time"],
                        Confirmed: json[0]["Confirmed"],
                        Confirmed_new:json[0]["Confirmed_new"],
                        Confirmed_trending:get_trending(json[0]["Confirmed_new"]),
                        Recovered:json[0]["Recovered"],
                        Recovered_new:json[0]["Recovered_new"],
                        Recovered_trending:get_trending(json[0]["Recovered_new"]),
                        Deaths:json[0]["Deaths"],
                        Deaths_new:json[0]["Deaths_new"],
                        Deaths_new_trending:get_trending(json[0]["Deaths_new"]),
                        Existing:json[0]["Existing"],
                        Existing_new:json[0]["Existing_new"],
                        Existing_new_trending:get_trending(json[0]["Existing_new"]),


                    });


            })



    }






    render() {






        return <div className="site-card-wrapper">
            <h2 className="time">更新时间：{this.state.Time}</h2>
            <Row  gutter={16}>
                <Col span={8}>
                    <Card bordered={true}>
                        <Statistic
                            title="确诊"
                            value={this.state.Confirmed}

                            valueStyle={{color: "blue"}}



                        />

                    </Card>
                </Col>
                <Col span={8}>
                    <Card bordered={true}>
                        <Statistic
                            title="治愈"
                            value={this.state.Recovered}

                            valueStyle={{color: "green"}}



                        />
                    </Card>
                </Col>
                <Col span={8}>
                    <Card bordered={true}>
                        <Statistic
                            title="死亡"
                            value={this.state.Deaths}

                            valueStyle={{color: "red"}}



                        />

                    </Card>
                </Col>

            </Row>


        </div>;
    };


}
