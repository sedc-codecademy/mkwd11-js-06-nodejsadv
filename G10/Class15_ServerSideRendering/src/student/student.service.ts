import { Injectable } from '@nestjs/common';

@Injectable()
export class StudentService {
  getStudents() {
    return [
      {
        id: 'abc213',
        name: 'Todor Pelivanov',
        age: 30,
        track: 'NET',
      },
    ];
  }
}
