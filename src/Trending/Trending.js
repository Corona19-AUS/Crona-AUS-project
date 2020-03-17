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
        fetch("https://corona19-api.herokuapp.com/api/trending")
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
                        categories: json['time']
                    },
                    series: [{
                        name: 'New South Wales',
                        data: json['state']['New South Wales'],

                    }, {
                        name: ' Victoria',
                        data: json['state']['Victoria'],

                    }, {
                        name: 'Queensland',
                        data: json['state']['Queensland'],

                    }, {
                        name: 'Western Australia',
                        data: json['state']['Western Australia'],

                    }, {
                        name: 'South Australia',
                        data: json['state']['South Australia'],

                    },
                        {
                            name: 'Tasmania',
                            data: json['state']['Tasmania'],

                        },
                        {
                            name: 'Northern Territory',
                            data: json['state']['Northern Territory'],

                        },
                        {
                            name: 'All Australia',
                            data: json['All Australia'],

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
