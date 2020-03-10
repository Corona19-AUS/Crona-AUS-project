import React from "react";
import {Card, Col, Row, Table} from "antd";
import {Tabs} from 'antd';


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
        fetch("./Data/EachState-data.json")
            .then(res => res.json())
            .then(json => {


                this.setState(
                    {
                        information: json
                    });



            })


    }


    render() {


        const columns = [
            {
                title: '州',
                dataIndex: 'state',
                key: 'state',
            },
            {
                title: '确诊',
                dataIndex: 'diagnose',
                key: 'diagnose',

            },
            {
                title: '治愈',
                dataIndex: 'cure',
                key: 'cure',
            },
            {
                title: '死亡',
                dataIndex: 'death',
                key: 'death',
            },
        ];


        return <div className="StateTable">
            <Table size="small" dataSource={this.state.information} columns={columns}/>

        </div>;
    };


}
