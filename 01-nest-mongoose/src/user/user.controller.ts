import { Body, Controller, Get, Post } from '@nestjs/common';
import { User } from './user.schema';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private entityService: UserService) {}
  @Get('init')
  async initUsers() {
    await this.entityService.init();
    return 'ok';
  }
  @Get('show')
  async showUsers() {
    return this.entityService.findAll();
  }
  @Post('create')
  async create(@Body() user: User) {
    console.log('user:', user);
    return this.entityService.create(user);
  }
}
