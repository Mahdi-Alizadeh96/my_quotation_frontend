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
        this.url = "auth/";
    };

    async postLogin() {

        const apiObj : RequestObject = {
            url : this.url + 'login',
            method : "post",
            body : this.requestObj
        };

        return await requestModel.response(apiObj);

    };

    async postSendOtp() {

        const apiObj : RequestObject = {
            url : this.url + 'send-otp',
            method : "post",
            body : this.requestObj
        };

        return await requestModel.response(apiObj);

    };

    async postVerifyOtp() {

        const apiObj : RequestObject = {
            url : this.url + 'verify-otp',
            method : "post",
            body : this.requestObj
        };

        return await requestModel.response(apiObj);

    };

    async postSignUp() {

        const apiObj : RequestObject = {
            url : this.url + 'sign-up',
            method : "post",
            body : this.requestObj
        };

        return await requestModel.response(apiObj);

    };

};

export default Auth;