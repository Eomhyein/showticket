// UserInfo 데코레이터 만들기
import { createParamDecorator, ExecutionContext } from '@nestjs/common';

export const UserInfo = createParamDecorator((data: unknown, ctx: ExecutionContext) => {
  const request = ctx.switchToHttp().getRequest();
  return request.user
    ? {
        name: request.user.name,
        nickname: request.user.nickname,
      }
    : null;
});
