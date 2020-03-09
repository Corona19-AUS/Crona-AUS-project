import React from "react";
import {Card, Col, Row, Table} from "antd";
import { Tabs } from 'antd';


const { TabPane } = Tabs;
function callback(key) {
    console.log(key);
}
export default class States extends React.Component {



//New South Wales, Victoria, Queensland, Western Australia, South Australia and Tasmania


    render() {
        const dataSource = [
            {
                state: 'New South Wales',
                diagnose: 1000,
                cure: 1231,
                death: 123,
            },
            {
                state: 'Victoria',
                diagnose: 1000,
                cure: 1231,
                death: 123,
            },
            {
                state: 'Queensland',
                diagnose: 1000,
                cure: 1231,
                death: 123,
            },
            {
                state: 'Western Australia',
                diagnose: 1000,
                cure: 1231,
                death: 123,
            },
            {
                state: 'Western Australia',
                diagnose: 1000,
                cure: 1231,
                death: 123,
            },
            {
                state: 'Western Australia',
                diagnose: 1000,
                cure: 1231,
                death: 123,
            },
        ];

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
            <Table size="small" dataSource={dataSource} columns={columns} />

        </div>;
    };


}
