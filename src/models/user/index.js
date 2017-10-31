import mongoose from 'mongoose'

const UserSchema = mongoose.Schema({
  userName: String,
  password: String,
  age: Number,
})


export default mongoose.model('User', UserSchema);
