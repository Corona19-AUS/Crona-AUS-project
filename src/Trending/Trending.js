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
                    categories: ['']
                },
                series: [{
                    name: 'New South Wales',
                    data: []
                }, {
                    name: ' Victoria',
                    data: []
                }, {
                    name: 'Queensland',
                    data: []
                }, {
                    name: 'Western Australia',
                    data: []
                }, {
                    name: 'South Australia',
                    data: []
                },
                    {
                        name: 'Tasmania',
                        data: []
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
