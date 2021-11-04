import mongoose from 'mongoose'
const Schema = mongoose.Schema

export {
  Puppy
}

const puppySchema = new Schema({
  name: {type: String, required: true},
  breed: {type: String, default: "Mixed"},
  age: {type: Number, default: 0}
})

const Puppy = mongoose.model("Puppy", puppySchema)