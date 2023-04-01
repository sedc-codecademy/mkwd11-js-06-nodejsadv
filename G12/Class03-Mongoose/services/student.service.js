import { Student } from "../models/student.model.js";

export class StudentService {
  // 1. Get all students
  static async getAllStudents(filters) {
    const students = await Student.find(filters || {}).setOptions({
      sanitizeFilter: true,
    });

    return students;
  }
  //   2. Get student by id
  static async getStudentById(studentId) {
    const student = await Student.findById(studentId);

    if (!student) throw new Error("Student not found");

    return student;
  }
  //   3. Create a student
  static async createStudent(studentData) {
    if (studentData._id) throw new Error("Invalid Data");

    // New student here is not a plain object but it is a mongoose document which contains a lot more methods and information
    const newStudent = new Student(studentData);

    // save valdiates and then if everything is okay writes the new document in the database
    const createdStudent = await newStudent.save();

    console.log("Save response", createdStudent);

    return createdStudent;
  }
  //   4. Update a student
  static async updateStudent(studentId, updateData) {
    const student = await this.getStudentById(studentId);

    if (updateData._id) throw new Error("Invalid data");
    // Object assign takes the target object and addes the properties of the second object to it
    Object.assign(student, updateData);

    // Saving after updates validates the data before writing it in the database
    const response = await student.save();

    console.log("Update response", response);

    return response;
  }

  //   5. Delete a student
  static async deleteStudent(studentId) {
    const response = await Student.findByIdAndDelete(studentId);

    if (!response) throw new Error("Student not found");

    console.log(response);
  }
}
