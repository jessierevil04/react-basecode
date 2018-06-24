import * as UTIL from 'util';
import axios from 'axios';
import * as URL from '../constants/url.js'

/**
 * @description API Method to create GET Request to retrieve sample data
 * @param component - The component where this method is called
 */
export const getPostAPI = component => {

    axios.get(UTIL.format(URL.GET_POST, 42))
        .then(function (response) {
            alert("see console");
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });

}