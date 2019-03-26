import axios from 'axios';
import { getProducts, productsStarted} from './index';
import { dangerToast } from '../components/Toast';

export const productsFetch = payload => {
    return dispatch => {
        dispatch(productsStarted());
        return axios.get(payload.url).then(response => {
            dispatch(getProducts(response.data));
        }).catch(error => {
            dangerToast(error.response.data)
        })
    };
};
