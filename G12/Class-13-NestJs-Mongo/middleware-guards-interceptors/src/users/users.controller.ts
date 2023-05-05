import { Body, Controller, Param, Patch, UseGuards } from '@nestjs/common';
import { AuthGuard } from 'src/auth/guards/auth.guard';
import { UsersService } from './users.service';
import { UpdateUserDto } from './dtos/update-user.dto';

@UseGuards(AuthGuard)
@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Patch(':id')
  updateUser(@Param('id') userId: string, @Body() updateData: UpdateUserDto) {
    return this.usersService.updateUser(userId, updateData);
  }
}
