const { getAllPostsRepositories } = require("../../../repositories");

const getAllPostsService = async () => {

    const {
        posts = []
    } = await getAllPostsRepositories();

    const has_multiple_posts = Array.isArray(posts) && posts.length > 0;

    return {
        posts,
        has_multiple_posts
    };
}

module.exports = {
    getAllPostsService
}