// <import api handler
import query from './apiHandlers';
// import api handler>

const baseUrlRoot = 'auth';

interface RequestData {
    body : object
};

function postLogin(req : RequestData) {

    const requestData = {
        url : baseUrlRoot + '/login',
        body : req.body
    };

    return query.ApiMutation(requestData);
    
};

/**
 * @description export all auth api
 */
const authApi = {
    postLogin
}

export default authApi;