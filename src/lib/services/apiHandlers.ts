// <import packages
import { useQuery, useMutation } from '@tanstack/react-query';
import axios from 'axios';
// import packages>

interface ApiQuery {
  queryName : string,
  url : string
}

/**
 * @param data data object to create api call 
 * @returns react query response object
 */
function ApiQuery(data: ApiQuery) {

  const { queryName, url } = data;

    const query = useQuery({queryKey: [queryName],queryFn: async () => {

      const res = await axios.get(`${process.env.NEXT_PUBLIC_BASE_ROOT}${url}`)
    
      return res.data;

    }});    

    return query;

};

interface ApiMutation {
  body : object,
  method ?: 'post',
  url : string
}

/**
 * @param data data object to create api call 
 * @returns react query mutation response object
 */
function ApiMutation(data: ApiMutation) {

  const { body, method = 'post', url } = data;

  const mutation = useMutation( async () => {
  
    const response = await axios({
      url : `${process.env.NEXT_PUBLIC_BASE_ROOT}${url}`,
      method,
      data : body
    });

    return response.data;
  
  });

  return mutation;
  
};

const queries = {
  ApiQuery,
  ApiMutation
}

export default queries;