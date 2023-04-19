import { Schema, model } from "mongoose";

const courseStructure = new Schema({
    _id: false, 
    languages: {
        type: [String],
        required: true,
    },
    frameworks: {
        type: [String],
        required: true,
    },
    tools: {
        type: [String],
        required: true
    }
})

const courseSchema = new Schema({
    title: {
        type: String,
        required: true,
        minLength: 3
    },
    numberOfClasses: {
        type: Number,
        min: 1,
        required: true
    },
    trainer: {
        type: String,
        required: true
    },
    assistant: {
        type: String,
        required: true
    },
    students: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Student'
        }
    ],
    courseStructure: {
        type: courseStructure,
        required: true
    }
})

const Course = model('Course', courseSchema);

export default Course;