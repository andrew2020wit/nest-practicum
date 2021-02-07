import { Controller, Get } from '@nestjs/common';
import { UserService } from '../service/user.service';

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
}
