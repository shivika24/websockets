const Responses = require("../common/API_responses");
const ActiveUser = require("../../models/activeUser");
const Post = require("../../models/post");

// api to be called everytime to connect to our socket
exports.handler = (event) => {
  try {
    const { connectionId: connectionID } = event.requestContext;

    //parse req.body
    const body = JSON.parse(event.body);
    console.log(body)
    console.log(connectionID)

    const query  = ActiveUser.where({ connectionID: connectionID });
    query.findOne((err, user) => {
      if (err) {
          console.log('error',err)
      } else {
          console.log(user);
      }
  });
    // ActiveUser.findOne({ connectionID: connectionID })
    // .then(response=>console.log(response))
    // .catch(err=>console.log('err',err))

    //to find if the connection is already established
    // try{
    // const record = await ActiveUser.findOne({ connectionID: connectionID });
    // console.log(record)
    // }catch(err){
    //   console.log('err',err)
    // }
    // if (record) {
    //   //to find post by postId on which comment is done
    //   const findPost = await Post.findOne({ _id: body.postId });
    //   console.log(findPost)
    //   if(findPost){
    //   //to fetch post comments
    //   const comments = findPost.comments;
    //   const { userEmail } = record;
    //   const comment = {
    //     email: userEmail,
    //     comment: body.comment,
    //     date: Date.now(),
    //   };
    //   console.log(comments)
    //   //to add new post comment in comments array
    //   comments.push(comment);
    //   console.log(comments)
    //   //update post table
    //   await Post.updateOne({ _id: body.postId }, { comments: comments });
    //   return Responses._200({ message: "message sent" });
    // }
    // return Responses._400({ message: "No Post Found with this post id..." })
    // }
    return Responses._200({ message: "Not Connected" });
  } catch (err) {
    console.log('err',err);
    return Responses._400({ message: "message could not be recieved" });
  }
};
