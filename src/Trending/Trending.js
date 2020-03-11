import React from 'react';
import ReactHighcharts from 'react-highcharts';
//New South Wales, Victoria, Queensland, Western Australia, South Australia and Tasmania
export default class Trending extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

           config : {
                title: {
                    text: '各州确诊统计'
                },
                subtitle: {
                    text: '03/11为止'
                },
                yAxis: {
                    title: {
                        text: '确诊人数'
                    }
                },
                credits: {
                    enabled: false
                },
                xAxis: {
                    categories: ['2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017']
                },
                series: [{
                    name: 'New South Wales',
                    data: [43934, 52503, 57177, 69658, 97031, 119931, 137133, 154175]
                }, {
                    name: ' Victoria',
                    data: [24916, 24064, 29742, 29851, 32490, 30282, 38121, 40434]
                }, {
                    name: 'Queensland',
                    data: [11744, 17722, 16005, 19771, 20185, 24377, 32147, 39387]
                }, {
                    name: 'Western Australia',
                    data: [null, null, 7988, 12169, 15112, 22452, 34400, 34227]
                }, {
                    name: 'South Australia',
                    data: [12908, 5948, 8105, 11248, 8989, 11816, 18274, 18111]
                },
                    {
                        name: 'Tasmania',
                        data: [12908, 5948, 8105, 11248, 8989, 11816, 18274, 18111]
                    }]
           }

        }
        fetch("./Data/Trending-data.json")
            .then(res => res.json())
            .then(json => {
                var config = {
                    title: {
                        text: '各州确诊统计'
                    },
                    subtitle: {
                        text: '为止'
                    },
                    yAxis: {
                        title: {
                            text: '确诊人数'
                        }
                    },
                    credits: {
                        enabled: false
                    },
                    xAxis: {
                        categories: json[0]['time']
                    },
                    series: [{
                        name: 'New South Wales',
                        data: json[0]['state']['New South Wales'],

                    }, {
                        name: ' Victoria',
                        data: json[0]['state']['Victoria'],

                    }, {
                        name: 'Queensland',
                        data: json[0]['state']['Queensland'],

                    }, {
                        name: 'Western Australia',
                        data: json[0]['state']['Western Australia'],

                    }, {
                        name: 'South Australia',
                        data: json[0]['state']['South Australia'],

                    },
                        {
                            name: 'Tasmania',
                            data: json[0]['state']['Tasmania'],

                        },
                        {
                            name: 'Northern Territory',
                            data: json[0]['state']['Northern Territory'],

                        },
                        {
                            name: 'All Australia',
                            data: json[0]['state']['All Australia'],

                        }],
                };


                this.setState(
                    {
                        config: config


                    });
                


            })


    }

    render() {




        return (
            <div className="trending">
                <ReactHighcharts config={this.state.config}/>
            </div>
        );
    }
}
