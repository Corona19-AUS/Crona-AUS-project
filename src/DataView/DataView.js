import React from 'react';

import {Statistic, Card, Col, Row} from 'antd';
import {ArrowUpOutlined, ArrowDownOutlined} from '@ant-design/icons';



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
        fetch("https://corona19-api.herokuapp.com/api/overview")
            .then(res => res.json())
            .then(json =>
            {


                this.setState(
                    {
                    	Time: json["Time"],
                        Confirmed: json["Confirmed"],
                        Confirmed_new:json["Confirmed_new"],
                        Confirmed_trending:get_trending(json["Confirmed_new"]),
                        Recovered:json["Recovered"],
                        Recovered_new:json["Recovered_new"],
                        Recovered_trending:get_trending(json["Recovered_new"]),
                        Deaths:json["Deaths"],
                        Deaths_new:json["Deaths_new"],
                        Deaths_new_trending:get_trending(json["Deaths_new"]),
                        Existing:json["Existing"],
                        Existing_new:json["Existing_new"],
                        Existing_new_trending:get_trending(json["Existing_new"]),


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
