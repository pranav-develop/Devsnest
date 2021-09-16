//jshint esversion: 8
export const updateName = (value) => {
    return {
        type: "UPDATE_NAME",
        payload: value,
    };
};

export const updateEmail = (value) => {
    return {
        type: "UPDATE_EMAIL",
        payload: value,
    };
};
