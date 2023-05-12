import { Injectable } from "@nestjs/common";

@Injectable()
export class StudentService {
  public students = [
    {
      id: "abc213",
      name: "Todor Pelivanov",
      age: 30,
      track: "NET",
      isMale: true,
    },
    {
      id: "qwe123",
      name: "Daniela Danielovska",
      age: 20,
      track: "JS",
      isMale: false,
    },
  ];

  getStudents() {
    return this.students;
  }

  getStudent(id: string) {
    return this.students.find(student => student.id === id);
  }

  createStudent(student: any) {
    this.students.push(student);
  }

  updateStudent(updatedStudentData: any, studentId: string) {
    const index = this.students.findIndex(student => student.id === studentId);

    this.students[index] = {
      ...updatedStudentData,
      id: studentId,
    };
  }

  deleteStudent(id: string) {
    this.students = this.students.filter(student => student.id !== id);
  }
}
