import React from 'react';
import {Table} from 'antd';
import {Statistic,Card, Col, Row} from 'antd';
import { ArrowUpOutlined, ArrowDownOutlined } from '@ant-design/icons';
function DataSource()
{

}

export default class DataVew extends React.Component {




    render() {
        //GetData
        var cure = 100;
        var death = 200;
        var infect = 100;



        return <div className="site-card-wrapper">
            <Row >
                <Col span={8}>
                    <Card  bordered={true}>
                        <Statistic
                            title="确诊人数"
                            value={1000}
                            precision={2}
                            valueStyle={{ color: "blue" }}
                            prefix={<ArrowUpOutlined />}
                            suffix="+120"

                        />

                    </Card>
                </Col>
                <Col span={8}>
                    <Card  bordered={true}>
                        <Statistic
                            title="治愈"
                            value={1000}
                            precision={2}
                            valueStyle={{ color: "green" }}
                            prefix={<ArrowUpOutlined />}
                            suffix="+100"

                        />
                    </Card>
                </Col>
                <Col span={8}>
                    <Card bordered={true} >
                        <Statistic
                            title="死亡人数"
                            value={1000}
                            precision={2}
                            valueStyle={{ color: "red" }}
                            prefix={<ArrowUpOutlined />}
                            suffix="+223"

                        />

                    </Card>
                </Col>
            </Row>


        </div>;
    };


}
