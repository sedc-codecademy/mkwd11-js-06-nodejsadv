import Course from '../models/course.model.js'
import StudentService from './student.service.js'

export default class CourseService {
    static async getAllCourses() {
        const courses = await Course.find({})
        return courses;
    }

    static async addNewCourse(courseData) {
        const course = new Course(courseData);

        const createdCourse = await course.save()

        return createdCourse;
    }

    static async updateCourse(courseId, updateData) {
        const course = await Course.findById(courseId);

        if (!course) throw new Error(`Course with id:${courseId} doesn't exist`);

        const keys = Object.keys(updateData)

        keys.forEach(key => {
            if (key !== '_id' && key !== '__v') {
                course[key] = updateData[key]
            }
        })

        await course.save();

        return course;
    }

    static async deleteCourse(id) {
        await Course.findByIdAndDelete(id)
    }

    static async updateStudents(courseId, studentIds) {
        const course = await Course.findById(courseId)

        if (!course) throw new Error(`Course with id: ${courseId} doesn't exists`)

        // preparing to update the course
        course.students = studentIds;

        // updating the students
        for (const studentId of studentIds) {
            await StudentService.updateStudent(studentId, { course: courseId })
        }

        await course.save();
        return course;
    }
}