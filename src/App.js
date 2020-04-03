import React from 'react';
import "./DataView/DataView.css";
import './App.css';
import DataView from "./DataView/DataView";
import {Col, Row} from "antd";
import "antd/dist/antd.css";
import 'antd-mobile/dist/antd-mobile.css';
import State from "./EachState/State";
import HealthInfo from "./HealthInfo/HealthInfo";
import Functions from "./Functions/Functions";
import ContactInfor from "./ContactInfor/ContactInfor";
import { FormattedMessage } from 'react-intl';
function App({setLocale}) {
  return (
    <div className="main">
        <div style={{width:"100%"}}>

            <button style={{width:"50%"}} onClick={() => setLocale('en')}>English</button>
            <button style={{width:"50%"}} onClick={() => setLocale('zh')}>中文</button>

        </div>
      <div className="title"><h1 className="mytitle">
        <FormattedMessage id="title" values={{ name: 'React' }}/>
      </h1></div>
        <div >
        <DataView/>
        <State/>
     
        <Functions/>
        <ContactInfor/>
        </div>
        <footer ><a href="https://www.health.gov.au/news/health-alerts/novel-coronavirus-2019-ncov-health-alert#current-status"><FormattedMessage  id="gov-link" values={{ name: 'React' }}/></a><p></p><a href="https://en.m.wikipedia.org/wiki/2020_coronavirus_outbreak_in_Australia"><FormattedMessage  id="wiki-link" values={{ name: 'React' }}/></a><p></p><a href="https://www.news.com.au/topics/coronavirus"><FormattedMessage  id="news-link" values={{ name: 'React' }}/></a>    </footer>
    </div>
  );
}

export default App;
