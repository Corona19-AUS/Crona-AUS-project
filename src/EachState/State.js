import React from "react";
import {Card, Col, Row, Statistic, Table} from "antd";
import {Tabs} from 'antd';
import {FormattedMessage} from "react-intl";
import "./State.css"

const {TabPane} = Tabs;

function callback(key) {
    console.log(key);
}

export default class States extends React.Component {


//New South Wales, Victoria, Queensland, Western Australia, South Australia and Tasmania
    constructor(props) {
        super(props);
        this.state = {

            information: ""

        }
        fetch("https://corona19-api.herokuapp.com/api/live_states_confirmed")
            .then(res => res.json())
            .then(json => {


                this.setState(
                    {
                        information: json
                    });


            })


    }


    render() {


        return <div className="StateTable">
            <h2 style={{textAlign:"center"}}>各州当前确诊人数</h2>
            <Row>
                <Col span={12}>
                    <Card bordered={false}>
                        <table style={{width: "100%"}}>
                            <tr>
                                <th><strong><FormattedMessage  id="table-Area" values={{ name: 'React' }}/></strong></th>
                                <th><strong><FormattedMessage  id="table-Confirmed" values={{ name: 'React' }}/></strong></th>
                            </tr>
                            <tr>
                                <td>New South Wales</td>
                                <td>{this.state.information['New South Wales']}</td>
                            </tr>
                            <tr>
                                <td>Victoria</td>
                                <td>{this.state.information['Victoria']}</td>
                            </tr>
                            <tr>
                                <td>Western Australia</td>
                                <td>{this.state.information['Western Australia']}</td>
                            </tr>
                            <tr>
                                <td>South Australia</td>
                                <td>{this.state.information['South Australia']}</td>
                            </tr>


                        </table>
                    </Card>
                </Col>
                <Col span={12}>
                    <Card bordered={false}>
                        <table style={{width: "100%"}}>
                            <tr>
                                <th><strong>地区</strong></th>
                                <th><strong>确诊</strong></th>
                            </tr>
                            <tr>
                                <td>Tasmania</td>
                                <td>{this.state.information['Tasmania']}</td>
                            </tr>
                            <tr>
                                <td>Australian Capital Territory</td>
                                <td>{this.state.information['Australian Capital Territory']}</td>
                            </tr>
                            <tr>
                                <td>Queensland</td>
                                <td>{this.state.information['Queensland']}</td>
                            </tr>
                            <tr>
                                <td>Northern Territory</td>
                                <td>{this.state.information['Northern Territory']}</td>
                            </tr>


                        </table>
                    </Card>
                </Col>
            </Row>

        </div>;
    };


}
