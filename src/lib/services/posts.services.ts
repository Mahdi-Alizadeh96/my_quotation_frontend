// <import api handler
import query from './apiHandlers';
// import api handler>

const baseUrlRoot = 'posts';

/**
 * @description get latest posts
 */
function getLatestPosts() {

    const requestData = {
        queryName : 'getLatestPosts',
        url : baseUrlRoot + '/latest-posts'
    };

    return query.ApiQuery(requestData);
    
};

/**
 * @description export all posts api
 */
const postsApi = {
    getLatestPosts,
}

export default postsApi;