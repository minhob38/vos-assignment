# 공간의 가치 백엔드 과제
## 🔎 개요
**서울시 구별 공시지가 순위**를 조회하는 API 서버입니다. 아래 URI를 통해 해당 지역의 **상위 20개 (공시지가 내림차순, pnu 올림차순)** 항목을 조회할 수 있습니다.  
`http://localhost:3000/api/land-value?area-code={시군구코드}&base-year={기준연도}&base-month={기준월}`

⚠️ 공시지가 순위를 계산할 때, 기준은 2020년 1월입니다. 따라서 클라이언트에서 Query String을 ***base-year=2020&base-month=01***로 요청해야합니다. 만일 아니라면 서버는 **400(Bad Request) 상태코드**를 응답합니다.

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
koa (express 차이)  
### postgreSQL (MongoDB 차이)
**sequelize**  
sequelize는 nodejs ORM(Object Relational Mapping)으로, database를 javascript 객체처럼 다룰 수 있게 해줍니다. 또한 sequelize가 javascript query문을 작성하면, SQL문으로 변환하여 database를 다루기 때문에 SQL 코드를 신경쓰지 않고 javascript 애플리케이션 개발에 집중해줄 수 있도록 해줍니다. (하지만,? 애플리케이션이 복잡해지고 )  
아래는 sequelize query와 SQL query의 차이입니다.
||Sequelize|SQL|
|:-|:-|:-|
|생성|`User.create({ name: "doe", age: 20 })`|`INSERT INTO users (name, age) VALUES("doe", 20)`|
|조회|`User.findAll({ where: { name: "doe" } })`|`SELECT * FROM users WHERE name = "doe"`|
|수정|`User.update({ age: 30, where: { name: "doe" } })`|`SELECT users SET age = 30 WHERE name = "doe"`|
|삭제|`User.destroy({ where: { name: "doe" } })`|`DELETE FROM users WHERE name = "doe"`|

csv-parser  
event-stream  
super-test  
chai  
google clould sql  

## Lesson
### Indexing에 의한 Database 조회 속도 차이
Database에 인덱싱이 있을 때와 없을 때의 조회 속도를 비교해보았습니다.
|인덱싱 없는 DB|인덱싱 있는 DB|
|:-|:-|
|6498ms|2376ms|



### 대용량 파일 처리