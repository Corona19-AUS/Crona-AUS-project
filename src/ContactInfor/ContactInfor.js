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
        infor:[
            {content:"请致电您的GP或者临近的医院（不要直接拜访),或致电各州求助电话:"},
            {content:"NSW: 1300 066 055 或1800 022 222"},
            {content:"VIC： 1300 651 160"},
            {content:"QLD：13 432 584"},
            {content:"WA：08 9222 8588"},
            {content:"SA：1300 232 272"},
            {content:"TAS：1800 671 738"},
            {content:"NT：08 8922 8044"},
            {content:"ACT：02 6205 2155"}
            ]
    };






    render() {






        return <div className="site-card-wrapper">
            <h2 className="time">医疗帮助资源：{this.state.Time}</h2>
            <Row>
                <Col span={24}>
                    <Card bordered={true}>
                     <p>{this.state.infor[0].content}</p>
                      <p>{this.state.infor[1].content}</p>
                      <p>{this.state.infor[2].content}</p>
                        <p>{this.state.infor[3].content}</p>
                        <p>{this.state.infor[4].content}</p>
                        <p>{this.state.infor[5].content}</p>
                        <p>{this.state.infor[6].content}</p>
                        <p>{this.state.infor[7].content}</p>
                        <p>{this.state.infor[8].content}</p>
                    </Card>
                </Col>

            </Row>
            <Row>
                <Col span={24}>
                    <Card bordered={true} title = "国内基本判断症状，请咨询您的GP获取专业意见" >

                       <p>{"潜伏期1-14天，多为3-7天。以发热，干咳，乏力为主要表现，少数患者伴有鼻塞、流涕、咽疼、肌疼和腹泻症状。重症多在发病一周后出现呼吸困难和/或低氧血栓，严重者可快速发展为记性呼吸窘迫综合症、脓毒症休克、难以矫正的代谢性酸中毒和出凝血功能障碍及多器官功能衰竭。重型，危重型疗程中可为中低热，甚至无明显发热"}</p> <p> {" 部分儿童及新生儿病例症状不典型，表现为呕吐，腹泻等消化道症状或仅表现为精神弱，呼吸急促"}</p> <p> {"轻型患者仅表现为低热，轻微乏力等，无肺炎表现"} </p>


                    </Card>
                </Col>

            </Row>


        </div>;
    };


}
