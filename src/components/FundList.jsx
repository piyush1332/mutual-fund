import React from 'react';
import { useHistory } from "react-router-dom";

function FundList({ listData }) {
    const history = useHistory();

    const openFundGraph = (code) => {
        history.push("/fund-details/"+code);
    }

    return (
        <>
            <div className="col-md-12" key={listData.schemeCode} schema-code={listData.schemeCode} onClick={ () => openFundGraph(listData.schemeCode) }>
                <div className="fund-list">
                    <span className="fund-name col-md-10 col-sm-10 col-xs-10"> {listData.schemeName} </span>
                    <span className="fund-icon col-md-2 col-sm-2 col-xs-2"> <i className="fa fa-chevron-right"></i> </span>
                </div>
            </div>
        </>
    )
}

export default FundList;