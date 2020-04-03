import React from "react";
import {Card, Col, Collapse, Statistic} from 'antd';


const {Panel} = Collapse;


export default class ExpertQA extends React.Component {

    //信息类，可考虑在constructor就调用数据或者render完再用componentDidMount渲染数据
    constructor(props) {
        super(props);

        this.state =
            {
                Mdata: ""
            }

        fetch("https://corona19-api.herokuapp.com/api/frequent_question_anwsers")
            .then(res => res.json())
            .then(json => {



                    var data = json.map((myjson) =>

                        <div key={myjson['title']}><p style={{color: "blue"}}>Q:{myjson['title']}</p><p>A: {myjson['content']}</p></div>);


                    this.setState({

                        Mdata: data
                    })


                }
            )
    }


    render() {


        return <div className="Official">

            <h2 style={{textAlign: "center"}}>国内专家Q&A</h2>
            以下内容为国内一线医生总结，仅为基本参考，请咨询您的GP或专业医生获取专业意见

            <Card bordered={true}>

                {
                    this.state.Mdata

                }


            </Card>
            <Card bordered={true}>
                <h2 style={{textAlign: "center"}}>群友亲戚国内经历</h2>

                <p>{"一个群友描述的具体新冠病例，以下为群友原文，无删节，无修改，仅为个人经历，具体病症请听取专业医生经验"}</p>
                <p>{"我武汉亲戚一家都是1月底感染的那一批，那是的武汉就是**，后期国家资源调配支援后，状况要好很多！"}</p>
                <p>{"不是医院免费的问题，是根本进不了医院"}</p>
                <p>{"去世的一个不到60，一个70多，重症的不到50，痊愈的一个不到50，一个20多"}</p>
                <p>{"武汉亲人都是先开始发烧，开始的时候，都没有咳嗽症状"}</p>
                <p>{"痊愈的两个就是低中烧，不超过38.5毒，发烧5-6天后开始退烧，初期有点腹泻症状，咳嗽不严重"}</p>
                <p>{"重症的发烧接近39，不容易退烧，有胸闷症状，咳嗽不严重，但一周后病情突然严重，血氧浓度降低，突然非常危险，进去定点医院抢救后，就无法联系了，后面的病症就不知道了"}</p>
                <p>{"如果5-6天能退烧，就算基本扛过来了，同时注意营养补充。她们当时都吃了抗病毒药，消炎药，中药"}</p>
                <p>{"还在医院的一个亲人有肺部纤维化，现在治疗医生推荐了一个国内刚开始进口的药，一盒1万2，还很难买，尼达尼布，一盒半月量"}</p>
                <p>{"具体的后遗症现在还不清楚，但轻症的应该后遗症不大，重症的肯定有，肺部重症纤维化需要一直服药"}</p>
                <p>{"老人，或者有其他疾病的，感染后一般扛不过一周，其他年龄段的病情分水岭就看能否退烧，并且三天内不反复，那就基本能痊愈了。只是我亲戚一家的大概分析，给大家稍作参考"}</p>
                <p>{"我是湖北人，因为有亲人，有朋友和同学，都在武汉，再加上有亲人感染，知道他们的经历，获得信息可能要多一些，所以对这个病毒，还是提醒大家，尽量做好防护，每个人的身体面对这种病毒到底是什么反应，谁都不知道，不是年轻就肯定能扛住的，也不是免疫力强就肯定能过关的，我绝不危言耸听，只是提醒大家，所有的数字统计，概率，在病毒面前，1%和100%其实没有区别！"}</p>
            </Card>


        </div>;
    };


}
