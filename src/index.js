import { model, Schema } from 'mongoose'

export const UserSchema = new Schema({
  _id: {
    type: Schema.Types.ObjectId,
    required: true
  },
  name: {
    type: String,
    required: true
  }
})

export const User = model('User', UserSchema)
