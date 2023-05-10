import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  private readonly users = [
    {
      userId: 1,
      username: 'user',
      password: 'user123',
    },
    {
      userId: 2,
      username: 'qwerty',
      password: 'qwerty123',
    },
  ];

  constructor() {}

  async findOne(username: string) {
    return this.users.find((user) => user.username === username);
  }
}
