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
            <h2 style={{textAlign:"center"}}><FormattedMessage  id="table-Title" values={{ name: 'React' }}/></h2>
            <Row>
                <Col span={12}>
                    <Card bordered={false}>
                        <table style={{width: "100%"}}>
                        <thead>
                            <tr>
                                <th><strong><FormattedMessage  id="table-Area" values={{ name: 'React' }}/></strong></th>
                                <th><strong><FormattedMessage  id="table-Confirmed" values={{ name: 'React' }}/></strong></th>
                            </tr>
                         </thead>
                         <tbody>
                            <tr>
                       
                                <td>NSW</td>
                                <td>{this.state.information['New South Wales']}</td>
                            </tr>
                            <tr>
                                <td>VIC</td>
                                <td>{this.state.information['Victoria']}</td>
                            </tr>
                            <tr>
                                <td>WA</td>
                                <td>{this.state.information['Western Australia']}</td>
                            </tr>
                            <tr>
                                <td>SA</td>
                                <td>{this.state.information['South Australia']}</td>
                            </tr>
                        </tbody>


                        </table>
                    </Card>
                </Col>
                <Col span={12}>
                    <Card bordered={false}>
                        <table style={{width: "100%"}}>
                        <thead>
                            <tr>
                                <th><strong><FormattedMessage  id="table-Area" values={{ name: 'React' }}/></strong></th>
                                <th><strong><FormattedMessage  id="table-Confirmed" values={{ name: 'React' }}/></strong></th>
                            </tr>
                       </thead>
                       <tbody>
                            <tr>
                                <td>TAS</td>
                                <td>{this.state.information['Tasmania']}</td>
                            </tr>
                            <tr>
                                <td>ACT</td>
                                <td>{this.state.information['Australian Capital Territory']}</td>
                            </tr>
                            <tr>
                                <td>QLD</td>
                                <td>{this.state.information['Queensland']}</td>
                            </tr>
                            <tr>
                                <td>NT</td>
                                <td>{this.state.information['Northern Territory']}</td>
                            </tr>
						</tbody>

                        </table>
                    </Card>
                </Col>
            </Row>

        </div>;
    };


}
