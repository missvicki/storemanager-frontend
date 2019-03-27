import axios from "axios";
import { loginUser, failedLoginUser, loginStarted } from "./index";

const loginFetch = payload => {
    return dispatch => {
        dispatch(loginStarted());
        return axios.post(payload.url, payload.data).then(response => {
            dispatch(loginUser(response.data));
            localStorage.setItem("token", response.data.access_token);
            payload.history.push("/products");
        }).catch(error => {
            const errorMsg = error.response.data.error
            dispatch(failedLoginUser(errorMsg));
        })
    };
};

export default loginFetch;
