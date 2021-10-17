const registerUser = ( formData ) => {
    try {
        if(localStorage.getItem('userInfo') === null) {
            localStorage.setItem('userInfo', JSON.stringify([formData]));
        } else {
            let userData = JSON.parse(localStorage.getItem('userInfo'));
            let userExist = false;
            userData.map((value)=>{
                if(value.email.toLowerCase() === formData.email.toLowerCase()) userExist = true;
            });
            if(userExist === false) {
                userData.push(formData);
                localStorage.setItem('userInfo', JSON.stringify(userData));
            }
        }
        return true;
    } catch (err) {
        console.error('Error in user registration : '+ err);
        return false;
    }
}

const validateUser = (formData) => {
    try {
        if(localStorage.getItem('userInfo') !== null) {
            let userData = JSON.parse(localStorage.getItem('userInfo'));
            let userValidated = false;
            userData.map((value) => {
                if(value.email.toLowerCase() === formData.email.toLowerCase() && value.password === formData.password) {
                    userValidated = true;
                }
            });
            return userValidated;
        } else {
            return false;
        }
    } catch (err) {
        console.error('Error in user validation : '+ err);
    }
}

export { registerUser , validateUser };