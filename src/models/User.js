import mongoose from 'mongoose';

const UserSchema = mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: String,
  active: {
    type: Boolean,

  }
});

export default mongoose.model('User', UserSchema);