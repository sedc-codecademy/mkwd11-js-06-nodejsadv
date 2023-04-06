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
    
    static async updateCourse(req, res) {
        try {
            const updatedCourse = await CourseService.updateCourse(req.params.id, req.body)
            res.status(200).send(updatedCourse)
        } catch (error) {
            res.status(500).send(error)
        }
    }

    static async deleteCourse(req, res) {
        try {
            await CourseService.deleteCourse(req.params.id)
            res.sendStatus(200)
        } catch (error) {
            res.status(500).send(error)
        }
    }

    static async updateStudents(req, res) {
        try {
            const courseId = req.params.id;
            const studentIds = req.body.studentIds;

            const response = await CourseService.updateStudents(courseId, studentIds)
            res.status(200).send(response)
        } catch (error) {
            res.status(500).send(error.message)
        }
    }
}