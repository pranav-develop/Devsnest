//jshint esversion: 8
const emailReducer = (email = "", action) => {
    switch (action.type) {
        case "UPDATE_EMAIL":
            return action.payload;
        default:
            return email;
    }
};

export default emailReducer;
