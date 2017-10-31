import mongoose from 'mongoose'

const UserSchema = mongoose.Schema({
  userName: String,
  password: String,
})


export default mongoose.model('User', UserSchema);
