import { Course } from "../models/course.model.js";

export class CourseService {
  // 1. Get all courses
  static async getAllCourses() {
    return Course.find({});
  }
  //   2. Get course by id
  static async getCourseById(courseId) {
    // Populate takes a property and if it finds a reference to another collection it fetches the data and populates the documents
    const course = Course.findById(courseId).populate("students");

    if (!course) throw new Error("Course not found");

    return course;
  }
  //   3. Create course
  static async createCourse(courseData) {
    if (courseData._id) throw new Error("Invalid data");

    const newCourse = new Course(courseData);

    const createdCourse = await newCourse.save();

    return createdCourse;
  }
}
