const loginReducer = (state = 'Inactive', action) => {
    switch(action.type) {
        case "Inactive":
            return 'Inactive';
        case "Active":
            return 'Active';
        default: 
            return state;     
    }
}

export default loginReducer;