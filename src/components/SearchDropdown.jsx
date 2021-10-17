import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Components.css';
import { useHistory } from "react-router-dom";

function SearchDropdown({ searchResult , setSearchResult }) {
    const history = useHistory();
    
    const openFundGraph = (code) => {
        history.push("/fund-details/"+code);
        setSearchResult([]);
    }

    return (
        <>
            <div className="search-dropdown col-md-8 col-sm-8 col-xs-8">
                <ul>
                    {searchResult.map((value , index)=>{
                        return <li key={'search-result-'+index} onClick={ () => openFundGraph(value.schemeCode) } >{value.schemeName}</li>;
                    })}
                </ul>
            </div>
        </>
    )
}

export default SearchDropdown;