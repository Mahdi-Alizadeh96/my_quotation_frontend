// <import packages
import axios from "axios";
import { deleteCookie, getCookie, setCookie } from 'cookies-next';
// import packages>

// <import types
import { RequestObject } from "&/types";
// import types>

class ApiHandlers {

  async createApiCall( requestObj : RequestObject ) {

    const { method = "get", url, body = null, params = null, contentType = "application/json" } = requestObj;

    const token = getCookie("token");

    const defaultReqObj = {
      method,
      url : `${process.env.NEXT_PUBLIC_BASE_ROOT}${url}`,
      headers : {
        "accept": "application/json",
        "Content-Type": contentType,
        "Authorization" : token
      },
      params
    };

    const reqObjWithBody = {...defaultReqObj, data : body};

    return await axios(!body ? defaultReqObj : reqObjWithBody);

  };

  async response( request : RequestObject ) {

    try {
        
      const response = await this.createApiCall(request);
      
      if (response.headers.authorization) {
        
        setCookie("token", response.headers.authorization);
        
      };

      if( response.status === 200 ||response.status === 201 ||response.status === 202 ) {

        if (response.data) {

          return { type : true, message : response.data.message, data : response.data.data };

        } else {

          return { type : false, message : "Error", data : null };

        };

      };

    } catch (error) {

      return this.fail(error);

    };

  };

  async fail(e : any) {
    
      if(e?.response?.status === 403 || e?.response?.status === 401) {

        deleteCookie('token');

        window.location.href = '/login';

      };

      let message : string = e?.response?.data?.message;

      return {
        type:false,
        message : message ||  "Failed to handle your request",
        data : null
      };

  };

};

const requestModel = new ApiHandlers();

export default requestModel;