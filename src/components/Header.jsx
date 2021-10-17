import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Components.css';
import SearchDropdown from './SearchDropdown';
import { searchMutualFundList } from '../pages/dashboard/DashboardNetwork';
import 'font-awesome/css/font-awesome.min.css';
import { Link } from 'react-router-dom';
import { inctivateSession } from '../redux/action/auth/login.action';
import { useSelector, useDispatch } from 'react-redux';

function Header() {
    const dispatch = useDispatch();
    const session = useSelector(state => state.session);
    const [ searchInput , setSearchInput ] = useState('');
    const [ searchResult , setSearchResult ] = useState([]);

    const searchMutualFund = async () => {
        const response = await searchMutualFundList(searchInput);
        setSearchResult(response);
    }

    const handleLogout = () => {
        localStorage.setItem('userSession','Inactive');
        dispatch(inctivateSession());
    }

    useEffect(()=>{
        searchMutualFund();
    },[searchInput]);

    return (
        <div className="header container-fluid">
            <div className="row">
                <div className="header-logo pt-3 pb-3 col-5">
                    <h4 className="m-0" > <Link className="header-logo-link" to={session === 'Active' ? '/dashboard' : '/login' }> Mutual Fund </Link> </h4>
                </div>
                { session === 'Active' && 
                <div className="header-searchbar col-7 pt-3 pb-3">
                    <input type="text" className="" onChange={ (e) => setSearchInput(e.target.value) } value={searchInput} />
                    <span onClick={ handleLogout }> <i className="fa fa-power-off"></i> </span>
                    { searchResult.length !== 0 && <SearchDropdown searchResult = {searchResult} setSearchResult={setSearchResult} /> }
                </div>}
            </div>
        </div>
    )
}

export default Header;