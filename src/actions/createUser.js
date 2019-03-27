import axios from 'axios';
import { createUser, failedUser, startCreate } from './index';

export const usersCreate = payload => {
    const token = localStorage.getItem('token');
    const headers = {
        Authorization: 'Bearer ' + token,
        Accept: 'application/json, */*',
        'Content-type': 'application/json'
    };
    return dispatch => {

        dispatch(startCreate());
        return axios.post(payload.url, payload.data, { headers: headers }).then(response => {
            dispatch(createUser(response.data.Success));
            payload.history.push("/products");
        }).catch(error => {
            if (error.response.status === 401) {
                const errorMsg = error.response.data.msg
                dispatch(failedUser(errorMsg));
            }
            if (error.response.status === 400) {
                const errorMsg = error.response.data.error
                dispatch(failedUser(errorMsg));
            }

        })
    };
};

