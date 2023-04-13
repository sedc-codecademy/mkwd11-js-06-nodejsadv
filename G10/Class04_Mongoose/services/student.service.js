import Student from '../models/student.model.js'
import Course from '../models/course.model.js'

export default class StudentService {
    static async getAllStudents() {
        const students = await Student.find({})

        return students;
    }

    static async getStudentById(studentId) {
        const student = await Student.findById(studentId).populate('course', '-students')
        
        // const course = await Course.findById(student.courseId).lean()
        // const fullStudent = {
        //     ...student,
        //     course
        // }

        return student;
    }

    static async addNewStudent(studentData) {
        // preparing & validating data
        const student = new Student(studentData);

        // adding data to Mongo DB
        const response = await student.save()

        // Returning back to controller
        return response;
    }

    static async updateStudent(studentId, updateData) {
        const student = await Student.findById(studentId);
        
        if (!student) throw new Error(`Student with ID:${studentId} doesn't exist!`)

        // student.firstName = updateData.firstName
        // student.lastName = updateData.lastName
        // student.age = updateData.age
        // student.email = updateData.email

        const keys = Object.keys(updateData);

        keys.forEach(key => {
            if (key !== '_id' && key !== '__v') {
                student[key] = updateData[key]
            }
        })

        const updatedStudent = await student.save();

        return updatedStudent;
    }

    static async deleteStudent(studentId) {
        await Student.findByIdAndDelete(studentId);
    }
}