// DTO는 유저 컨트롤러에서 사용한다.
import { IsNotEmpty, IsString } from 'class-validator';

export class LoginDto {
  // 닉네임, 이름, 비밀번호 데코레이션
  @IsString({ message: '비밀번호는 문자열이여야 합니다.' })
  @IsNotEmpty({ message: '비밀번호를 입력해주세요.' })
  password: string;

  @IsString({ message: '닉네임은 문자열이여야 합니다.' })
  @IsNotEmpty({ message: '닉네임을 입력해주세요.' })
  nickname: string;

  @IsString({ message: '이름은 문자열이여야 합니다.' })
  @IsNotEmpty({ message: '이름을 입력해주세요.' })
  name: string;
}
