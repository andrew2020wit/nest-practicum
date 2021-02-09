import { Controller, Get } from '@nestjs/common';
import { UsersService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private userS: UsersService) {}
  @Get('init')
  async init() {
    return this.userS.initTest();
  }

  @Get('show')
  async show() {
    return this.userS.findAll();
  }
}
