import Post from '../../../models/Post';
import User from '../../../models/User';


export default {
  Post: {
    author: (post) => User.find(post.author)
  },
  Query: {
    posts: () => Post.find(),
    post: (_, { id }) => Post.findById(id),
  },
  Mutation: {
    createPost: (_, { data }) => Post.create(data),
    updatePost: (_, { id, data }) => Post.findOneAndUpdate(id, data, { new: true }),
    deletePost: async (_, { id }) => {
      const deleted = await User.findOneAndDelete(id);

      return !!deleted
    }
  }
};