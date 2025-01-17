import { compare, hash } from 'bcrypt';
import _ from 'lodash';
import { Repository } from 'typeorm';
import { ConflictException, Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
    private readonly jwtService: JwtService,
  ) {}

  async signup(name: string, nickname: string, password: string) {
    const existingUser = await this.findByNickname(nickname);
    if (existingUser) {
      throw new ConflictException('이미 해당 닉네임으로 가입된 사용자가 있습니다!');
    }

    const hashedPassword = await hash(password, 10);
    const createdUser = await this.userRepository.save({
      name,
      nickname,
      password: hashedPassword,
    });
    // 비밀번호 빼고 가져오기
    const { password: _, ...userWithoutPassword } = createdUser;
    return userWithoutPassword;
  }
  async findByNickname(nickname: string) {
    return await this.userRepository.findOneBy({ nickname });
  }

  async login(nickname: string, password: string) {
    const user = await this.userRepository.findOne({
      select: ['userId', 'nickname', 'password'],
      where: { nickname },
    });
    if (_.isNil(user)) {
      throw new UnauthorizedException('닉네임을 확인해주세요.');
    }

    if (!(await compare(password, user.password))) {
      throw new UnauthorizedException('비밀번호를 확인해주세요.');
    }

    const payload = { nickname, sub: user.userId };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
