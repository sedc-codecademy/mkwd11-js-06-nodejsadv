import Course from '../models/course.model.js'

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
}