import React from 'react';

function FundDiscription({ fundInfo }) {
    return (
        <>
            <div className="col-md-12">
                <div className="fund-discription-holder">
                    <div> {`Scheme Name :  ${fundInfo.scheme_name} `} </div>
                    <div> {`Scheme Type :  ${fundInfo.scheme_type} `} </div>
                    <div> {`Scheme Category :  ${fundInfo.scheme_category} `} </div>
                    <div> {`Fund House :  ${fundInfo.fund_house} `} </div>
                </div>
                
            </div>
        </>
    )
}

export default FundDiscription;