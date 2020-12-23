const Responses = require('../common/API_responses');
const ActiveUser = require('../../models/activeUser');
const User = require('../../models/user');
const {initMongo} = require('../common/dbConnection');

exports.handler = async event => {
    await initMongo();
    const {connectionId: connectionID, domainName, stage} = event.requestContext;
    const findUser = await User.findOne({email:event['queryStringParameters']['email']});
    if(findUser){
    const data = {
        connectionID:connectionID,
        userEmail:event['queryStringParameters']['email'],
        date: Date.now(),
        domainName,
        stage
    }

    await ActiveUser.create(data)

    return Responses._200({message:'connected'})
    }
    return Responses._200({message:'User Not Registered'})
}