import { Controller, Get, Render } from '@nestjs/common';
import { StudentService } from './student.service';

@Controller('student')
export class StudentController {
  constructor(private readonly studentService: StudentService) {}

  @Get()
  @Render('student/student-list')
  async getStudents() {
    const students = this.studentService.getStudents();

    return { students };
  }
}
