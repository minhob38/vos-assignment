# 공간의 가치 백엔드 과제
## 🔎 개요
**서울시 구별 공시지가 순위**를 조회하는 API 서버입니다. 아래 URI를 통해 해당 지역의 **상위 20개 (공시지가 내림차순, pnu 올림차순)** 항목을 조회할 수 있습니다.  
`http://localhost:3000/api/land-value?area-code={시군구코드}&base-year={기준연도}&base-month={기준월}`

⚠️ 공시지가 순위를 계산할 때, 기준은 2020년 1월입니다. 따라서 클라이언트에서 Query String을 `base-year=2020&base-month=01`로 요청해야합니다. 만일 아니라면 서버는 **400(Bad Request) 상태코드**를 응답합니다.

## 📝 설치 및 실행
### 설치
```
git clone https://github.com/minhob38/vos-assignment.git
cd vos-assignment
npm install
```

### 서버 실행
서버는 localhost 3000 포트에서 실행됩니다.
```
npm start
```

### 서버 테스트
```
npm test
```

## 👷🏻 Stack
### koa (express 차이)
### postgreSQL (MongoDB 차이)
### sequelize
sequelize는 nodejs ORM(Object Relational Mapping)으로, database를 javascript 객체처럼 다룰 수 있게 해줍니다. 또한 sequelize가 javascript query문을 작성하면, SQL문으로 변환하여 database를 다루기 때문에 SQL 코드를 작성하지 않아도 됩니다. 이처럼 **sequelize가 javascript 애플리케이션 개발에 집중해줄 수 있도록 해주기 때문에, sequelize를 사용하였습니다.**  
아래는 sequelize query와 SQL query의 차이입니다.
||Sequelize|SQL|
|:-|:-|:-|
|**생성**|`User.create({ name: "doe", age: 20 })`|`INSERT INTO users (name, age) VALUES("doe", 20)`|
|**조회**|`User.findAll({ where: { name: "doe" } })`|`SELECT * FROM users WHERE name = "doe"`|
|**수정**|`User.update({ age: 30, where: { name: "doe" } })`|`SELECT users SET age = 30 WHERE name = "doe"`|
|**삭제**|`User.destroy({ where: { name: "doe" } })`|`DELETE FROM users WHERE name = "doe"`|

### csv-parser
csv-parser는 stream 기반으로 csv를 읽기에 파일 크기와 관계 없이 parsing 할 수 있습니다. 또한, 행별로 읽은 결과를 csv 헤더가 key인 객체로 반환하여 결과를 다루기 쉽습니다. 이처럼 csv를 다루기에 좋은 라이브러리이기에, **서울특별시 개별공시지가정보 csv를 parsing 하기 위해서 csv-parser를 사용하였습니다.**

### event-stream
서울특별시 개별공시지가정보는 29,397,090개로 nodejs에서 이 데이터를 저장한다면 메모리부족으로 에러가 발생하기에, 한번에 이 데이터들을 Database에 삽입하는 것은 불가능합니다. 따라서 stream을 끊어서 Database에 저장할 필요가 있습니다. 하지만 stream에 대한 이벤트는 비동기로 발생하기에 이를 동기코드처럼 다루기에는 어려움이 있습니다. event-stream은 stream을 메모리가 아닌 시간에 대한 배열처럼 다루어, stream을 중간에 멈추고 필요한 작업을 한뒤 다시 stream을 재개할 수 있게 해줍니다. **이처럼 stream 중간작업 제어를 위해 event-stream을 사용하였습니다.**

### super-test
http 요청을 테스트 하기 위해, 서버를 열고 요청을 보낸 후 응답을 받아야 합니다. **super-test는 이러한 과정을 해주기에 API 서버의 endpoint를 테스트 할 수 있습니다.** super-test를 통해 받은 API 서버의 응답 결과를 검증하기 위해 **mocha의 test 함수와 chai의 assertion 함수를 기반으로 응답결과와 기대값을 비교하였습니다.**

### mocha / chai
Mocha는 nodejs에서 실행되는 javascript test framework이며 chai는 함께 사용되는 assertion library입니다. **mocha와 chai를 통해, util 함수가 요구사항에 따라 작동하는지 테스트 할 수 있었습니다.**

### google clould sql
작업 컴퓨터가 아닌 다른 컴퓨터에서도 편리하게 Database에 접근하게 하기 위해서는, Database를 로컬환경이 아닌 클라우드 환경에 올릴 필요가 있습니다. google clould sql은 MySQL, PostgreSQL Database를 클라우드 환경에서 관리해줍니다. **이러한 클라우드를 통해 환경에 관계 없이 database에 접근할 수 있도록 하였습니다.**


## Lesson
### Indexing에 의한 Database 조회 속도 차이
Database에 인덱싱이 있을 때와 없을 때의 조회 속도를 비교해보았습니다.
|인덱싱 없는 DB|인덱싱 있는 DB|
|:-|:-|
|6498ms|2376ms|

### 대용량 파일 처리
stream (정지) -> db 저장 -> stream (재개)