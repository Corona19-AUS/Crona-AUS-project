import React from 'react';
import "./DataView/DataView.css";
import './App.css';
import DataView from "./DataView/DataView";
import {Col, Row} from "antd";
import "antd/dist/antd.css";
import 'antd-mobile/dist/antd-mobile.css';
import State from "./EachState/State";
import Functions from "./Functions/Functions";

function App() {
  return (
    <div className="main">
      <div className="title"><h1 className="mytitle">
        澳大利亚新冠疫情信息汇总
      </h1></div>
        <div >
        <DataView/>
        <Functions/>
        </div>
    </div>
  );
}

export default App;
