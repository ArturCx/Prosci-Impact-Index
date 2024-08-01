import { Controller, Get, Post, Body } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async createUser(@Body() body: { email: string; password: string }) {
    return this.userService.createUser(body);
  }

  @Get()
  async getUsers() {
    return this.userService.getUsers();
  }

  @Post('login')
  async login(@Body() body: { email: string; password: string }) {
    return this.userService.login(body);
  }
}
