import { Schema, model } from 'mongoose';
import validator from 'validator';

const studentSchema = new Schema({
    firstName: {
        type: String,
        required: [true, 'First name is required'],
        minLength: 2
    },
    lastName: {
        type: String,
        required: [true, 'Last name is required'],
        minLength: 2
    },
    age: {
        type: Number,
        min: [18, 'Age must be greater than 18'],
        max: 120,
        required: [true, 'Age is required']
    },
    email: {
        type: String,
        validate: {
            validator: (value) => validator.isEmail(value),
            message: (error) => `${error.value} is not a valid email`
        },
        required: true,
        unique: true
    },
    course: {
       type: Schema.Types.ObjectId,
       ref: 'Course'
    }
})

const Student = model('Student', studentSchema);

export default Student;