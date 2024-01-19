import mongoose from 'mongoose';
const { Schema, model} = mongoose;

const clientSchema = new Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: String,
  phone: {
    type: String,
    required: true,
  },
  email: {
    type: String,
  },
  isActive: {
    type: Boolean,
    default: false,
  },
  createdAt: {
    type: Date,
    default: () => Date.now(),
    immutable: true,
  },
  updatedAt: Date,
  comments: String

});

const Client = model("Client", clientSchema);
export default Client;