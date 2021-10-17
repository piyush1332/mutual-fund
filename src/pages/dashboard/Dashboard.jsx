import React, { useEffect, useState } from 'react';
import Header from '../../components/Header';
import FundList from '../../components/FundList';
import { getMutualFundList } from './DashboardNetwork';

function Dashboard() {
    const [ fundList , setFundList ] = useState([]);
    const [ loaderState , setLoaderState ] = useState('none');

    const getFundList = async () => {
        setLoaderState('block');
        const response = await getMutualFundList();
        setLoaderState('none');
        if(response.length !== 0) {
            const temp = [];
            response.map((value , index)=>{
                if(index < 5) temp.push(value);
                else return false;
            });
            setFundList(temp);
        }
    }

    useEffect(()=>{
        getFundList();
    },[]);

    return (
        <>
            <div className="dashboard-holder">
                <Header />
                <div className="container fund-list-holder">
                    <div className="fund-header">
                        <h4> Mutual Fund List </h4>
                    </div>
                    <div className="fund-list-block">
                        {fundList.map((value) => {
                            return <FundList listData = {value} />
                        })}
                    </div>
                </div>
                <div className="table_process_loader" style={{ display: loaderState }} ></div>
            </div>
        </>
    )
}

export default Dashboard;