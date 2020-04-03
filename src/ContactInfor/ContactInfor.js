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
            {content:"如有发烧或咳嗽症状，海外旅行或和本地确诊有过交集，请致电您的GP或者临近的医院（不要直接拜访),或致电各州求助电话"},
            {content:"目前CDC电话处理速度加快，建议先拨打以下电话"},
            {content:"NSW: 1300 066 055 或1800 022 222"},
            {content:"VIC： 1300 651 160"},
            {content:"QLD：13 432 584"},
            {content:"WA：08 9222 8588"},
            {content:"SA：1300 232 272"},
            {content:"TAS：1800 671 738"},
            {content:"NT：08 8922 8044"},
            {content:"ACT：02 6205 2155"}
            ],




    };






    render() {

        var element = []
        for( var i in this.state.infor)
        {
            element.push( <p>{this.state.infor[i].content}</p>)
        }




        return <div className="site-card-wrapper">
            <h2 className="time">医疗帮助资源</h2>
            <Row>
                <Col span={24}>

                    <Card bordered={true}>
                        {element}

                    </Card>
                </Col>

            </Row>
            <p></p>

            <Row>
                <Col span={24}>
                    <Card bordered={true}  >
						<p>{"国内症状参考，请咨询医生获取专业意见"}</p>
                       <p>{"潜伏期1-14天，多为3-7天。以发热，干咳，乏力为主要表现，少数患者伴有鼻塞、流涕、咽疼、肌疼和腹泻症状。重症多在发病一周后出现呼吸困难和/或低氧血栓，严重者可快速发展为急性呼吸窘迫综合症、脓毒症休克、难以矫正的代谢性酸中毒和出凝血功能障碍及多器官功能衰竭。重型，危重型疗程中可为中低热，甚至无明显发热"}</p> <p> {" 部分儿童及新生儿病例症状不典型，表现为呕吐，腹泻等消化道症状或仅表现为精神弱，呼吸急促"}</p> <p> {"轻型患者仅表现为低热，轻微乏力等，无肺炎表现"} </p>


                    </Card>
                </Col>

            </Row>
                        <h2 className="time">关于我们{this.state.Time}</h2>
            <Row>
                <Col span={24}>
                    <Card bordered={true}  >
						<p>{"感谢澳洲IT群的IT们和热心学生们，占用他们的宝贵时间，而且后续还要他们继续更新维护，在此特别感谢。另外，大家如果有自己悉知的消息敬请联系我们：coronastats.au@gmail.com"}</p>
						<p>{"确诊数据和各州趋势图数据主要来自于News，维基百科和澳大利亚卫生部，数据可能滞后，但为了保证准确率，我们选择了比较慢的一种方式，请您谅解"}</p>
						<p>{"我们同时可能需要一批志愿者以便在后面情形比较恶劣时提供帮助于其他人，如果您愿意伸出援助之手，请在群里联系或者发送邮件至coronastats.au@gmail.com"}</p>
                       <p>{"下来的一段时间可能比较艰难，请大家保持镇静，做好准备，心向光明"}</p> <p> {" 愿善良与我们同在"}</p>

                    </Card>
                </Col>

            </Row>


        </div>;
    };


}
