'use strict'

const httpStatusCodes = require('http-status-codes');
const { httpErrorHandler } = require('../../common/handlers');
const { 
    getPostByUserIdService,
    getAllPostsService 
} = require('../../services');

const listPostHandler = async (req, res, next) => {
    try{
        const {
            user_id
        } = req.query;
        
        const has_user_id = !!user_id && Number.isFinite(+user_id);
        
        const user_posts = has_user_id && await getPostByUserIdService({user_id});

        const all_posts = !has_user_id && await getAllPostsService();

        const posts = [
            ...user_posts ? user_posts.posts : [],
            ...all_posts ? all_posts.posts : [],
        ];

        return res.status(httpStatusCodes.OK).send({posts});
    }catch(error){
        return httpErrorHandler({ req, res, error })
    }
}

module.exports = {
    listPostHandler
}