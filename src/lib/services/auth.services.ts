// <import handler
import requestModel from "./apiHandlers";
// import handler>

// <import types
import { RequestObject } from "&/types";
// import types>

class Auth {

    url : string
    requestObj ?: object

    constructor( requestObj ?: object ) {
        this.requestObj = requestObj;
        this.url = "auth/login";
    };

    async postLogin() {

        const apiObj : RequestObject = {
            url : this.url,
            method : "post",
            body : this.requestObj
        };

        return await requestModel.response(apiObj);

    };

};

export default Auth;