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
            <Row>
                <Col span={6}>
                    <Card bordered={true}>
                        <Statistic
                            title="确诊人数"
                            value={this.state.Confirmed}
                            precision={0}
                            valueStyle={{color: "blue"}}
                            prefix={this.state.Confirmed_trending}
                            suffix={this.state.Confirmed_new}

                        />

                    </Card>
                </Col>
                <Col span={6}>
                    <Card bordered={true}>
                        <Statistic
                            title="治愈人数"
                            value={this.state.Recovered}
                            precision={0}
                            valueStyle={{color: "green"}}
                            prefix={this.state.Recovered_trending}
                            suffix={this.state.Recovered_new}

                        />
                    </Card>
                </Col>
                <Col span={6}>
                    <Card bordered={true}>
                        <Statistic
                            title="死亡人数"
                            value={this.state.Deaths}
                            precision={0}
                            valueStyle={{color: "red"}}
                            prefix={this.state.Deaths_new_trending}
                            suffix={this.state.Deaths_new}

                        />

                    </Card>
                </Col>
                <Col span={6}>
                    <Card bordered={true}>
                        <Statistic
                            title="现存人数"
                            value={this.state.Existing}
                            precision={0}
                            valueStyle={{color: "purple"}}
                            prefix={this.state.Existing_new_trending}
                            suffix= {this.state.Existing_new}

                        />

                    </Card>
                </Col>
            </Row>


        </div>;
    };


}
