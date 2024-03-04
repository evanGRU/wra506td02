import {getToken} from "./auth.js";
import axios from "axios";

const axiosConfig = {
    headers:{
        Accept: "application/json",
        Authorization: `Bearer ${getToken()}`
    }
};

const fetchData = async (URL) => {
    const defaultObject = {
        data: null,
        errors: null
    }
    try {
        const response = await axios.get(URL, axiosConfig);
        defaultObject.data = response.data;
    } catch (error) {
        defaultObject.error = error;
    }

    return defaultObject;
}

const postData = async (URL, dataToAdd) => {
    try {
        await axios.post(URL, dataToAdd, axiosConfig);
    } catch (error) {
        console.log('Error: ', error);
    }
}

export {
    axiosConfig,
    fetchData,
    postData
}