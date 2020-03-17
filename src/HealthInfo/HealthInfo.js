import React from "react";
import {Collapse} from 'antd';
import {CaretRightOutlined} from '@ant-design/icons';

const {Panel} = Collapse;



export default class HealthInfo extends React.Component {

    //信息类，可考虑在constructor就调用数据或者render完再用componentDidMount渲染数据
    constructor(props) {
        super(props);

        this.state =
            {
                Mdata:""
            }

        fetch("https://corona19-api.herokuapp.com/api/health_infos")
            .then(res => res.json())
            .then(json => {

                    var data = [];

                    var imageStyle = {
                    	width:0,
                    	height:0
                    }


                    for (var i = 0; i < json.length; i++) {
                    	 if(json[i]['imagesrc']!="")
                        {

                            imageStyle = {
                                width:"20%",
                                height:"50%"

                            }
                        }
                        else{
                        	 imageStyle = {
                                width:"",
                                height:""

                            }

                        }

                        data.push(<Panel header={json[i]['title']} key={i} className="site-collapse-custom-panel">
                         <p>更新时间:{json[i]['created_at']}</p>
                         <p>正文:{json[i]['content']}</p>
                         <p><img  style={imageStyle} src={json[i]['imagesrc']}></img></p>
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
                {/*<Panel header="As at 11:00 hrs on 9 March 2020, we have 80 confirmed cases of coronavirus (COVID-19), including 3 deaths, in Australia." key="1" className="site-collapse-custom-panel">*/}
                {/*    <p>40 in New South Wales*/}
                {/*        12 in Queensland*/}
                {/*        6 in South Australia*/}
                {/*        2 in Tasmania*/}
                {/*        8 in Victoria*/}
                {/*        2 in Western Australia*/}
                {/*        10 associated with the Diamond Princess cruise ship*/}
                {/*        Further details:*/}

                {/*        15 of the initially reported cases in Australia all had a direct or indirect travel history to Wuhan, China*/}
                {/*        10 cases, including 1 death, are associated with the Diamond Princess cruise ship repatriation flight from Japan*/}
                {/*        16 cases are reported to have had a direct or indirect travel history to Iran*/}
                {/*        21 cases are reported to have had a travel history to countries including Singapore, the United States of America, the United Arab Emirates, the United Kingdom, Italy, Iceland, Japan, the Republic of Korea, Thailand, the Philippines, Cuba, Indonesia, Nepal and Taiwan*/}
                {/*        18 cases, including 2 deaths, do not have a reported history of overseas travel*/}
                {/*        15 of these cases are associated with an aged care facility in NSW. 2 residents of this facility have sadly died*/}
                {/*        2 cases are either directly or indirectly associated with attendance at a workshop*/}
                {/*        1 case is under investigation, with further details pending*/}
                {/*        Of the 80 Australian cases reported, 22 of these cases are reported to have recovered.</p>*/}
                {/*</Panel>*/}
                {/*<Panel header="Coronavirus: COVID-19 cases continue to climb across Australia" key="2" className="site-collapse-custom-panel">*/}
                {/*    <p>Sixth case confirmed in Western Australia*/}
                {/*        Two new cases of coronavirus have been confirmed in Western Australia today, one of which is suspected to be the first human-to-human transmission of the virus in the state.*/}
                {/*        The woman, in her 60s, was diagnosed after her husband returned from Iran and is still being tested for the virus.*/}
                {/*        The couple is self-isolating at home, with regular monitoring being conducted by the Health Department. Her husband is being tested for the virus.*/}
                {/*        <a href="https://www.9news.com.au/national/coronavirus-victoria-three-new-cases-covid19-three-sydney-high-school-students-diagnosed-australia/a16ff590-51d9-4b04-b377-96fdb0db05bf">link</a>*/}
                {/*    </p>*/}

                {/*</Panel>*/}
                {
                    this.state.Mdata

                }

            </Collapse>


        </div>;
    };


}
