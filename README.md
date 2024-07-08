<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](LICENSE).

# 온라인 공연 예매 서비스 제작

- 타입스크립트와 Nest.js를 이용한 숙련도 향상

## 과제 설명

- 각 곡연은 공연명, 공연시간, 장소, 가격 등의 정보를 가지며 원하는 공연을 선택하고 예매할 수 있어야 합니다.

## 기간

- 2024.06.28(금) ~ 07.08(월)

## API

- **[API](https://humorous-krill-a4e.notion.site/28f0702f9cd24115917e85c16b4e22f4?v=02b1d7ebff3d44c5bf5808ef91b2de01&pvs=4)**

## ERD

- **[ERD](https://drawsql.app/teams/-1294/diagrams/show-ticket)**

## .env

```.env
DB_HOST="데이터베이스 주소"
DB_PORT=3306
DB_USERNAME="데이터베이스 계정"
DB_PASSWORD="데이터베이스 암호"
DB_NAME="데이터베이스명"
DB_SYNC=true
JWT_SECRET_KEY=jwt 시크릿키
```

## 어려웠던 점

- 패키지 다운로드 받는 명령어도 이해하지 못한 상태에서 초기세팅하느라 오래걸림
- ERD와 API 설계에 시간을 많이씀
- 엔티티 제작에 컬럼하나씩 데코레이터 강의에 나오지 않은 (@CreateDateColumn(), @UpdateDateColumn() )등 사용하는데 조금 힘들었다 다른 것을 넣어서 적용이 잘 안되기도 했다.
- 엔티티, dto,, 커스텀 데코레이터, 컨트롤러, 서비스 ~~ 순으로 코딩하는 것은 강의 자료를 통해 조금 알겠으나
- guard나 jwt 등 이해력 부족으로 인해 어느 파일에 어떤 내용을 넣어야 되는지 모름
