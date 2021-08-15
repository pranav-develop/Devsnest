//jshint esversion: 8
const nameReducer = (name = "", action) => {
    switch (action.type) {
        case "UPDATE_NAME":
            return action.payload;
        default:
            return name;
    }
};

export default nameReducer;
