import React from 'react';
import "./DataView/DataView.css";
import './App.css';
import DataView from "./DataView/DataView";
import "antd/dist/antd.css";
import 'antd-mobile/dist/antd-mobile.css';
import Functions from "./Functions/Functions";
import ContactInfor from "./ContactInfor/ContactInfor";
import Location from "./LocationSituation/Location";
function App() {
  return (
    <div className="main">
      <div className="title"><h1 className="mytitle">
        澳大利亚新冠疫情信息汇总
      </h1></div>
        <div >
        <DataView/>
        <Functions/>
        <Location/>
        <ContactInfor/>
        </div>
        <footer ><a href="https://www.health.gov.au/news/health-alerts/novel-coronavirus-2019-ncov-health-alert#current-status">澳大利亚政府卫生部官方网站</a><p></p><a href="https://en.m.wikipedia.org/wiki/2020_coronavirus_outbreak_in_Australia">澳大利亚新冠疫情维基百科</a><p></p><a href="https://www.news.com.au/topics/coronavirus">新闻集团新冠疫情最新数据</a>    </footer>
    </div>
  );
}

export default App;
