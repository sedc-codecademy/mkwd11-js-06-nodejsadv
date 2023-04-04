import CourseService from '../services/course.service.js';

export default class CourseController {
    static async getAllCourses(req, res) {
        try {
            const courses = await CourseService.getAllCourses()
            res.status(200).send(courses);
        } catch (error) {
            res.status(500).send(error)
        }
    }

    static async addNewCourse(req, res) {
        try {
            const course = await CourseService.addNewCourse(req.body)
            res.status(200).send(course);
        } catch (error) {
            res.status(500).send(error)
        }
    }
}