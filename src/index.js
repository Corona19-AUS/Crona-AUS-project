import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';


import "./index.css"


import {IntlProvider} from "react-intl"
import en from "./LanguageDict/en";
import zh from "./LanguageDict/zh";

const Root = () => {
    // 使用 useState 定義 locale 這個 state
    const [locale, setLocale] = useState(navigator.language);
    let messages;
    if (locale.includes('zh')) {
        messages = zh;
    }
    else {
        messages = en;
    }

    return (
        <IntlProvider
            locale={locale}
            key={locale}
            defaultLocale="en"
            messages={messages}
        >

            <App setLocale={setLocale} />
        </IntlProvider>
    );
};

ReactDOM.render(<Root/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

