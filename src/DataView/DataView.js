import React from 'react';
import {Table} from 'antd';
import {Statistic, Card, Col, Row} from 'antd';
import {ArrowUpOutlined, ArrowDownOutlined} from '@ant-design/icons';
import {FormattedMessage} from "react-intl";
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
    	var c_s="+";
        var r_s="+";
        var d_s="+";
        if(this.state.Confirmed_new<0)
        {
            c_s=""
        }
        if(this.state.Recovered_new<0)
        {
            r_s=""
        }
        if(this.state.Deaths_new<0)
        {
            d_s=""
        }

        var confirmTitle =<span style={{color:"blue"}}><FormattedMessage  id="DataView-Confirm" values={{ name: 'React' }}/>{c_s} {this.state.Confirmed_new}</span>
        var recoverTitle =<span style={{color:"green"}}><FormattedMessage  id="DataView-Recovery" values={{ name: 'React' }}/>{r_s} {this.state.Recovered_new}</span>
        var deathTitle =<span style={{color:"red"}}><FormattedMessage  id="DataView-Death" values={{ name: 'React' }}/>{d_s} {this.state.Deaths_new}</span>







        return <div className="site-card-wrapper">
            <h2 className="time"><FormattedMessage id="update-time" values={{ name: 'React' }}/>{this.state.Time}</h2>
            <Row  gutter={16}>
                <Col span={8}>
                    <Card key={1}  bordered={true}>
                        <Statistic
                            title={confirmTitle}
                            value={this.state.Confirmed}

                            valueStyle={{color: "blue"}}



                        />

                    </Card>
                </Col>
                <Col span={8}>
                    <Card key={2} bordered={true}>
                        <Statistic
                            title={recoverTitle}
                            value={this.state.Recovered}

                            valueStyle={{color: "green"}}



                        />
                    </Card>
                </Col>
                <Col span={8}>
                    <Card key={3} bordered={true}>
                        <Statistic
                            title={deathTitle}
                            value={this.state.Deaths}

                            valueStyle={{color: "red"}}



                        />

                    </Card>
                </Col>

            </Row>


        </div>;
    };


}
