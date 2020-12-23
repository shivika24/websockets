const Responses = require("../common/API_responses");
const ActiveUser = require("../../models/activeUser");
const { initMongo } = require("../common/dbConnection");

exports.handler = async (event) => {
  await initMongo();
  
  const { connectionId: connectionID } = event.requestContext;
  await ActiveUser.remove({ connectionID: connectionID });
  return Responses._200({ message: "disconnected" });
};
