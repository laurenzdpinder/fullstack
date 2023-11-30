const {
    client
} = require('../../../common/handlers')

const getAllPostsRepositories = async () => {

    const response = await client('posts')

    const has_response = Array.isArray(response) && response.length > 0;

    if(!has_response){
        return {
            posts: []
        }
    }

    return {
        posts: response
    }
}

module.exports = {
    getAllPostsRepositories
}
