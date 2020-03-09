import React from 'react';
import {Table} from 'antd';
import {Statistic, Card, Col, Row} from 'antd';
import {ArrowUpOutlined, ArrowDownOutlined} from '@ant-design/icons';

function DataSource() {

}

export default class DataVew extends React.Component {



    constructor(props) {
        super(props);
        this.state = {hi: this.getDate()};
    }



    getDate()
    {
        var data = 1

        return data

    }


    render() {
        //GetData






        return <div className="site-card-wrapper">
            <Row>
                <Col span={8}>
                    <Card bordered={true}>
                        <Statistic
                            title="确诊人数"
                            value={this.state.hi}
                            precision={0}
                            valueStyle={{color: "blue"}}
                            prefix={<ArrowUpOutlined/>}
                            suffix="+120"

                        />

                    </Card>
                </Col>
                <Col span={8}>
                    <Card bordered={true}>
                        <Statistic
                            title="治愈人数"
                            value={1000}
                            precision={0}
                            valueStyle={{color: "green"}}
                            prefix={<ArrowUpOutlined/>}
                            suffix="+100"

                        />
                    </Card>
                </Col>
                <Col span={8}>
                    <Card bordered={true}>
                        <Statistic
                            title="死亡人数"
                            value={1000}
                            precision={0}
                            valueStyle={{color: "red"}}
                            prefix={<ArrowUpOutlined/>}
                            suffix="+223"

                        />

                    </Card>
                </Col>
            </Row>


        </div>;
    };


}
