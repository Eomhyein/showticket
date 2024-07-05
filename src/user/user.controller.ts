import { UserInfo } from 'src/utils/userInfo.decorator';
import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { LoginDto } from './dto/login.dto';
import { User } from './entities/user.entity';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('signup')
  async signup(@Body() loginDto: LoginDto) {
    return await this.userService.signup(loginDto.name, loginDto.nickname, loginDto.password);
  }

  @Post('login')
  async login(@Body() loginDto: LoginDto) {
    return await this.userService.login(loginDto.nickname, loginDto.password);
  }

  @UseGuards(AuthGuard('jwt'))
  @Get('profile')
  getNickname(@UserInfo() user: User) {
    return { nickname: user.nickname, points: user.points };
  }
}
