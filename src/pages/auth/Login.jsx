import React, { useState } from 'react';
import Header from '../../components/Header';
import { validateUser } from './AuthNetwork';
import { activateSession } from '../../redux/action/auth/login.action';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

function Login() {
    const dispatch = useDispatch();
    const [ errorMessage , setErrorMessage ] = useState('');
    const [ formData , setFormData ] = useState({
        email: '',
        password: ''
    });

    const handleInputChange = (source , value) => {
        setFormData(prevState => ({ ...prevState , [source]: value }));
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const response = validateUser(formData);
        if(response === true) {
            setErrorMessage('');
            localStorage.setItem('userSession','Active');
            dispatch(activateSession());
        } else {
            setErrorMessage('Incorrect Email or Password !');
        }
    }

    return (
        <>
            <div className="login-page">
                <Header />
                <div className="container">
                    <div className="login-form-container col-md-6 col-sm-12">
                        <form onSubmit={ handleSubmit }>
                            <div>
                                <h2> Login </h2>
                            </div>
                            <div className="error-message text-danger"> { errorMessage } </div>
                            <div>
                                <label className="form-group-label"> Email : </label>
                                <input type="email" className="form-text-input" placeholder="Email" onChange={ (e) => handleInputChange('email' , e.target.value) } />
                            </div>
                            <div>
                                <label className="form-group-label"> Password : </label>
                                <input type="password" className="form-text-input" placeholder="Password" onChange={ (e) => handleInputChange('password' , e.target.value) } />
                            </div>
                            <div className="switch-form-label">
                                <Link to="/signup"> Create new account </Link>
                            </div>
                            <div>
                                <input type="submit" className="form-submit-btn btn-primary" value="Submit" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login;