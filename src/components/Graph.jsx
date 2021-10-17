import React , { useEffect, useState } from 'react';
import ReactECharts from "echarts-for-react";

function Graph({ graphData }) {
    let [ option , setOption ] = useState({
        title: {
            text: '',
            subtext: ''
        },
        tooltip: {
            trigger: 'axis',
        },
        xAxis: {
            type: 'category',
            boundaryGap: false,
            data: [''],
        },
        yAxis: {
            type: 'value',
            axisLabel : {
                formatter: '{value}%'
            },
        },
        series: [{
            name: 'nav',
            type: 'line',
            data: [],
            showSymbol: false,
        }]
    });

    const preapreGraphData = (data) => {
        const xAxis = [];
        const price = [];
        data.map((value)=>{
            xAxis.push(value.date);
            price.push(value.nav);
        });
        setOption({
            title: {
                text: '',
                subtext: ''
            },
            tooltip: {
                trigger: 'axis',
            },
            xAxis: {
                type: 'category',
                boundaryGap: false,
                data: xAxis,
            },
            yAxis: {
                type: 'value',
                axisLabel : {
                    formatter: '{value}%'
                },
            },
            series: [{
                name: 'nav',
                type: 'line',
                data: price,
                showSymbol: false,
            }]
        });
    }

    useEffect(()=>{
        preapreGraphData(graphData);
    },[graphData]);

    return (
        <>
            <div className="echart_parent">
                <ReactECharts
                    option={option}
                    lazyUpdate={true}
                    theme={"theme_name"}
                />
            </div>
        </>
    )
}

export default Graph;