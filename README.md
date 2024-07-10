# 🎫 온라인 공연 예매 서비스 제작

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
