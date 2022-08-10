import Message from "../../models/Message";
import Post from "../../models/Post";
import User from "../../models/User";

const Query = {
  ping() {
    return "pong";
  },
  messages: async () => {
    return await Message.find();
  }, //Comment.find().where({userId: user._id}) <=== dentro de un .map where({authorId:user._id});
  findUsers: async () => {
    const users = await User.find();
    const usersWithPosts = users.map((user) => {
      user.allPost = Post.find().where({ authorId: user._id });
      return user;
    });
    console.log(usersWithPosts);
    return usersWithPosts;
  },
  findPosts: async () => {
    const post = await Post.find();
    const postsWithUsers = post.map((post) => {
      post.author = User.findById(post.authorId);
      return post;
    });
    return postsWithUsers;
  },
  findUserById: async (_, { id }) => {
    const user = await User.findById(id);
    user.allPost = Post.find().where({ authorId: user._id });
    return user;
  },
  findPostByTitle: async (_, { title }) => {
    const post = await Post.find({ title });
    post.author = User.findById(post.authorId);
    return post;
  },
  findUserByToken: async (_, args, { req }) => {
    const { verifiedUser } = req;
    const user = await User.findById(verifiedUser._id);
    user.allPost = Post.find().where({ authorId: user._id });
    return user;
  },
};

export default Query;
