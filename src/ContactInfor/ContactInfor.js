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


state={
    infor:"xxxx.hostpital:808080"
}




    render() {






        return <div className="site-card-wrapper">
            <h2 className="time">重要联系方式：{this.state.Time}</h2>
            <Row>
                <Col span={24}>
                    <Card bordered={true}>
                        <Statistic
                            title="确诊人数"
                            value={this.state.infor}




                        />

                    </Card>
                </Col>

            </Row>


        </div>;
    };


}
