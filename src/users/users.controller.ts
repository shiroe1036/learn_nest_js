import { Controller } from '@nestjs/common';
import { UserService } from './users.service';
import { Param, Post, Body, Delete, Get } from '@nestjs/common/decorators';

@Controller('users')
export class UsersController {
  constructor(private service: UserService) {}

  @Get(':id')
  get(@Param() params) {
    const param = { id: parseInt(params.id) };
    return this.service.user(param);
  }

  @Get()
  getCollections() {
    const params = {
      select: { fullName: true, birthday: true, isActive: true },
    };
    return this.service.users(params);
  }

  @Post()
  create(@Body() user: { fullName: string; birthday: any; isActive: boolean }) {
    return this.service.createUser(user);
  }

  //   @Put()
  //   update(@Body() user: UserEntity) {
  //     return this.service.updateUser(user);
  //   }

  @Delete(':id')
  deleteUser(@Param() params) {
    return this.service.deleteUser(params.id);
  }
}
