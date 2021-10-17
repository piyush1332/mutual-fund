import React , { useState } from 'react';
import Header from '../../components/Header';
import { registerUser } from './AuthNetwork';
import { Link , useHistory } from 'react-router-dom';

function Signup() {
    const history = useHistory();
    const [ errorMessage , setErrorMessage ] = useState('');
    const [ formData , setFormData ] = useState({
        name: '',
        email: '',
        password: '',
        cpassword: '',
        gender: '',
        date: ""
    });

    const handleInputChange = (source , value) => {
        setFormData(prevState => ({ ...prevState , [source]: value }));
    }

    const formValidation = () => {
        if(formData.password === formData.cpassword) {
            setErrorMessage('');  
            return true;
        } else {
            setErrorMessage('Password and Confirm Password are not matched');  
            return false;
        } 
    }

    const resetForm = () => {
        setFormData({
            name: '',
            email: '',
            password: '',
            cpassword: '',
            gender: '',
            date: ""
        });
    }

    const handleSubmission = (e) => {
        e.preventDefault();
        if(formValidation()) {
            const registered = registerUser( formData ); 
            if(registered === true) {
                alert('User Registered Sucessfully');
                resetForm();  
                history.push('/login');
            } else {
                alert('User Registration Failed');
            } 
        }   
    }

    return (
        <>
            <div className="login-page">
                <Header />
                <div className="container">
                    <div className="login-form-container col-md-6 col-sm-12">
                        <form onSubmit={ handleSubmission }>
                            <div>
                                <h2> Sign Up </h2>
                            </div>
                            <div className="error-message text-danger"> { errorMessage } </div>
                            <div>
                                <label className="form-group-label"> Name : </label>
                                <input type="text" className="form-text-input" placeholder="Name" onChange={ (e) => handleInputChange('name' , e.target.value) } value={ formData.name } required />
                            </div>
                            <div>
                                <label className="form-group-label"> Email : </label>
                                <input type="email" className="form-text-input" placeholder="Email" onChange={ (e) => handleInputChange('email' , e.target.value)  } value={ formData.email } required />
                            </div>
                            <div>
                                <label className="form-group-label"> Password : </label>
                                <input type="password" className="form-text-input" placeholder="Password" onChange={ (e) => handleInputChange('password' , e.target.value) } value={ formData.password } required />
                            </div>
                            <div>
                                <label className="form-group-label"> Confirm Password : </label>
                                <input type="password" className="form-text-input" placeholder="Confirm Password" onChange={ (e) => handleInputChange('cpassword' , e.target.value) } value={ formData.cpassword } required />
                            </div>
                            <div className="form-radio-holder">
                                <label className="form-group-label"> Gender : </label>
                                <div>
                                    <input type="radio" name="gender" className="form-radio-group" value="male" onChange={ (e) => handleInputChange( 'gender' , e.target.value ) } required /> <label className="form-radio-label"> Male </label> 
                                </div>
                                <div>
                                    <input type="radio" name="gender" className="form-radio-group" value="female" onChange={ (e) => handleInputChange( 'gender' , e.target.value ) } required /> <label className="form-radio-label"> Female </label>
                                </div>
                                <div>
                                    <input type="radio" name="gender" className="form-radio-group" value="other" onChange={ (e) => handleInputChange( 'gender' , e.target.value ) } required /> <label className="form-radio-label"> Other. </label>
                                </div>
                            </div>
                            <div>
                                <label className="form-group-label"> Date Of Birth : </label>
                                <input type="date" className="form-text-input" onChange={ (e) => handleInputChange('date' , e.target.value) } value={ formData.date } required />
                            </div>
                            <div className="switch-form-label">
                                <Link to="/login"> Already have an account </Link>
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

export default Signup;