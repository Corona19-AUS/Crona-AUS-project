import React from "react";
import {Collapse} from 'antd';
import {CaretRightOutlined} from '@ant-design/icons';

const {Panel} = Collapse;



export default class OfficialNews extends React.Component {


    constructor(props) {
        super(props);

        this.state =
            {
                Mdata:""
            }

        fetch("https://corona19-api.herokuapp.com/api/official_news")
            .then(res => res.json())
            .then(json => {

                    var data = [];

                    for (var i = 0; i < json.length; i++) {
                        data.push(<Panel header={json[i]['title']} key={i} className="site-collapse-custom-panel">
                         <p>更新时间:{json[i]['created_at']}</p>
                         <p>正文:{json[i]['content']}</p>
                         <p><a href={json[i]['link']}>原文链接</a></p>

                        </Panel>)
                    }
                    this.setState({

                        Mdata: data
                    })



                }
            )
    }


    render() {


        return <div className="Official">
            <Collapse
                bordered={false}
                defaultActiveKey={['0']}
                expandIcon={({isActive}) => <CaretRightOutlined rotate={isActive ? 90 : 0}/>}
                className="site-collapse-custom-collapse"
            >

                {
                    this.state.Mdata

                }

            </Collapse>


        </div>;
    };


}
