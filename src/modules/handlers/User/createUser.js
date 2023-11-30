'use strict'
const httpStatusCodes = require('http-status-codes');
const { httpErrorHandler } = require("../../common/handlers");
const { createUserService } = require('../../services');

const createUserHandler = async (req, res, next) => {
    try{
        const {
            user_email,
            user_password,
            full_name
        } = req.body

        const userCredentials = { user_email, user_password, full_name };

        const { user_created_id } = await createUserService(userCredentials);

        const created_user = {
            id: user_created_id[0],
            ...userCredentials
        }

        return res.status(httpStatusCodes.OK).send(created_user);
    }catch(error){
        return httpErrorHandler({ req, res, error })
    }
}

module.exports = {
    createUserHandler
}