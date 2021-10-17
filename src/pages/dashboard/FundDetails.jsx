import React , { useEffect, useState } from 'react';
import Header from '../../components/Header';
import Graph from '../../components/Graph';
import FundDiscription from '../../components/FundDiscription';
import { useParams } from "react-router-dom";
import { getFundGraphData } from './DashboardNetwork';

function FundDetails() {
    const [ graphData , setGraphData ] = useState([]);
    const [ fundInfo , setFundInfo ] = useState({});
    const [ loaderState , setLoaderState ] = useState('none');
    const { id } = useParams();

    const fetchGraphData = async (code) => {
        setLoaderState('block');
        const response = await getFundGraphData(code);
        setLoaderState('none');
        setGraphData(response.data);
        setFundInfo(response.meta);
    }

    useEffect(() => {
        fetchGraphData(id);
    },[id]);

    return (
        <>
            <div className="fund-graph-holder">
                <Header />
                <div className="container">
                    <div className="graph-container">
                        <Graph graphData={graphData} />
                    </div>
                    <div className="fund-discription">
                        <FundDiscription fundInfo={fundInfo} />
                    </div>
                </div>
            </div>
            <div className="table_process_loader" style={{ display: loaderState }} ></div>
        </>
    )
}

export default FundDetails;