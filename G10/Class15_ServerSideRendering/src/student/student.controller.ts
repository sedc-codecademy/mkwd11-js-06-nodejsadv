import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Redirect,
  Render,
} from "@nestjs/common";
import { StudentService } from "./student.service";

@Controller("student")
export class StudentController {
  constructor(private readonly studentService: StudentService) {}

  @Get()
  @Render("student/student-list")
  async getStudents() {
    const students = this.studentService.getStudents();

    return { students }; // What we return here will be available in the template
  }

  @Get("add-student") // This is the path for the form (which we use in the browser)
  @Render("student/add-student") // this is the template name (path to the template (view))
  getAddStudentForm() {
    return {};
  }

  @Get("update-student/:id")
  @Render("student/update-student")
  getUpdateStudentForm(@Param("id") id: string) {
    const student = this.studentService.getStudent(id);

    return student;
  }

  @Get(":id")
  @Render("student/student-details")
  getStudent(@Param("id") id: string) {
    const student = this.studentService.getStudent(id);

    return student;
  }

  // to add the student
  @Post()
  @Redirect("/student") // After the student is added to the list of students, redirect to the student list. This is the path for the form (which we use in the browser)
  createStudent(@Body() body: any) {
    return this.studentService.createStudent(body);
  }

  // POST as we can't use PUT nor PATCH in form method attribute
  @Post("update-student/:id")
  @Redirect("/student")
  updateStudent(@Body() body: any, @Param("id") id: string) {
    return this.studentService.updateStudent(body, id);
  }

  @Get("delete-student/:id")
  @Redirect("/student")
  deleteStudent(@Param("id") id: string) {
    return this.studentService.deleteStudent(id);
  }
}
