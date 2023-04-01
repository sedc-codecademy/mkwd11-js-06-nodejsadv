import { Schema, model } from "mongoose";
import validator from "validator";

// Defining a student schema
const studentSchema = new Schema({
  firstName: {
    type: String,
    required: [true, "First name is required"],
    minLength: 2,
  },
  lastName: {
    type: String,
    required: [true, "Last name is required"],
    minLength: 2,
  },
  age: {
    type: Number,
    required: true,
    min: 16,
    max: 120,
  },

  email: {
    // Add todos when you need to skip some implementation and then you return back to it, ctrl + shift + f to search through the entire project and find all TODO comments that haven't been resolved yet
    //TODO Need to add custom validation for valid emails
    type: String,
    required: true,
    unique: true,
    validate: {
      // validator property takes the value of the field as an argument and returns true or false
      validator: value => validator.isEmail(value),
      // If validator fails then we get the error in the message property which is used to return an error to the user
      message: error => `${error.value} is not a valid email`,
    },
  },
});

// Creating and exporting the mongoose model
export const Student = model("Student", studentSchema);
