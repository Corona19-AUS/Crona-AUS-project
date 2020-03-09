import React from 'react';
import "./DataView/DataView.css";
import './App.css';
import DataView from "./DataView/DataView";
import {Col, Row} from "antd";
import "antd/dist/antd.css";
import State from "./EachState/State";
import Functions from "./Functions/Functions";

function App() {
  return (
    <div className="main">
      <div className="title"><h2>澳大利亚新冠病毒信息汇总</h2></div>
    <DataView/>
        <Functions/>
    </div>
  );
}

export default App;
