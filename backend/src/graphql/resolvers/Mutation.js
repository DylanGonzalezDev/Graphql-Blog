import Message from "../../models/Message";
import Post from "../../models/Post";
import User from "../../models/User";
import createUserJWT from "../../utils/auth";

const Mutation = {
  createMessage: async (_, { title, content, author }) => {
    const newMessage = new Message({ title, content, author });
    return await newMessage.save();
  },
  registerUser: async (_, { username, password, email, displayName }) => {
    const newUser = new User({
      username,
      password,
      email,
      displayName,
    });

    const token = createUserJWT({
      _id: newUser._id,
      username,
      email,
      password,
      displayName,
    });
    console.log("este es el token desde mutation: " + token);

    return await newUser.save();
  },
  login: async (_, args) => {
    const { email, password } = args;
    const user = await User.findOne({ email }).select("+password");
    if (!user || user.password !== password) throw new Error("Wrong password");
    const token = createUserJWT({ _id: user._id, email, username: user.username });
    return token;
  },
  
  createPost: async (parent, { title, body, tags }, { req }) => {
    const { verifiedUser } = req;
    const post = new Post({
      title,
      body,
      tags,
      authorId: verifiedUser._id,
    });
    return await post.save();
  },

  createComment: async (_, { comment, postID }, {req}) => {
    const { verifiedUser } = req;
    const commentCreated = new Comment({
      comment,
      userID: verifiedUser._id,
      postID,
    });
    return await commentCreated.save();
  },
};

export default Mutation;
